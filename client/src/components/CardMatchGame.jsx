import { useEffect, useMemo, useRef, useState } from 'react';

function shuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function formatTime(seconds) {
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');
  return `${mm}:${ss}`;
}

const STRINGS = {
  tr: {
    title: 'Eşleştirme Oyunu: Terim – Tanım',
    subtitle: 'Bir terim kartını doğru tanım kartıyla eşleştir.',
    instructions: [
      "Başlat'a bas → kartları ezberle",
      'Sonra 1 terim + 1 tanım seç',
      'Doğru eşleşmeler açık kalır',
    ],
    start: 'Başlat',
    restart: 'Yeniden Başlat',
    previewHint: 'Kartları ezberle:',
    score: 'Skor',
    moves: 'Hamle',
    time: 'Süre',
    pickTermDef: 'Bir terim ve bir tanım seçmelisin.',
    correct: 'Doğru eşleştirme! ✅',
    wrong: 'Yanlış eşleşme. Tanımı tekrar oku.',
    finishedTitle: 'Harika iş!',
    finishedSub: 'Tüm eşleşmeleri tamamladın.',
  },
  en: {
    title: 'Matching Game: Term – Definition',
    subtitle: 'Match each term card with its correct definition.',
    instructions: [
      'Press Start → memorize the cards',
      'Then pick 1 term + 1 definition',
      'Correct matches stay open',
    ],
    start: 'Start',
    restart: 'Restart',
    previewHint: 'Memorize the cards:',
    score: 'Score',
    moves: 'Moves',
    time: 'Time',
    pickTermDef: 'Pick one term and one definition.',
    correct: 'Correct match! ✅',
    wrong: 'Not a match. Re-read the definition.',
    finishedTitle: 'Great job!',
    finishedSub: 'You matched all pairs.',
  },
};

export default function CardMatchGame({ isTurkish, pairs }) {
  const t = (key) => (isTurkish ? STRINGS.tr[key] : STRINGS.en[key]);

  const defaultPairsTr = useMemo(
    () => [
      { term: 'Ekran Kilidi', def: 'Cihazı yetkisiz erişime karşı koruyan ilk kalkan.' },
      { term: 'Güncelleme', def: 'Güvenlik açıklarını kapatan yazılım iyileştirmesi.' },
      { term: 'Yedekleme', def: 'Verilerin kaybolma riskine karşı kopyalanması.' },
      { term: 'Zararlı Yazılım', def: 'Cihaza zarar veren veya veri çalan programlar.' },
      { term: 'Gizlilik Ayarı', def: 'Verilerin kimlerle paylaşılacağını belirleyen kontrol.' },
      { term: 'Siber Zorbalık', def: 'Dijital ortamda başkalarını üzen davranışlar.' },
    ],
    []
  );

  const defaultPairsEn = useMemo(
    () => [
      { term: 'Screen Lock', def: 'The first shield protecting device from unauthorized access.' },
      { term: 'Update', def: 'Software improvement that closes security vulnerabilities.' },
      { term: 'Backup', def: 'Copying data to prevent loss in case of failure.' },
      { term: 'Malware', def: 'Programs that damage devices or steal data.' },
      { term: 'Privacy Setting', def: 'Control that determines who can see your data.' },
      { term: 'Cyberbullying', def: 'Behaviors that upset others in digital environments.' },
    ],
    []
  );

  const pairsData = useMemo(() => {
    const fallback = isTurkish ? defaultPairsTr : defaultPairsEn;
    if (Array.isArray(pairs) && pairs.length) {
      return pairs.map((pair) => {
        if (Array.isArray(pair)) return { term: pair[0], def: pair[1] };
        return { term: pair.term, def: pair.def };
      });
    }
    return fallback;
  }, [isTurkish, pairs, defaultPairsTr, defaultPairsEn]);

  const pairsNormalized = useMemo(() => {
    return pairsData
      .filter((p) => p && typeof p.term === 'string' && typeof p.def === 'string')
      .map((p, idx) => ({ id: idx + 1, term: p.term, def: p.def }));
  }, [pairsData]);

  const totalPairs = pairsNormalized.length;

  // GAME STATES
  // idle     → Start screen (no cards clickable)
  // preview  → All cards open for 3 seconds
  // playing  → Normal gameplay
  // finished → All pairs matched
  const [phase, setPhase] = useState('idle'); // 'idle' | 'preview' | 'playing' | 'finished'

  const [cards, setCards] = useState([]); // [{uniqueId, pairId, type:'term'|'def', text}]
  const [selected, setSelected] = useState([]); // [uniqueId,...] (max 2)
  const [matched, setMatched] = useState([]); // [pairId,...]
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [previewLeft, setPreviewLeft] = useState(3);
  const [feedback, setFeedback] = useState(null); // { type:'ok'|'bad'|'info', message:string }
  const [lock, setLock] = useState(false);

  const timerRef = useRef(null);
  const previewIntervalRef = useRef(null);
  const previewTimeoutRef = useRef(null);
  const feedbackTimeoutRef = useRef(null);

  const score = matched.length; // matched pairs count (kids-friendly)

  const buildDeck = () => {
    const base = pairsNormalized.flatMap((p) => [
      { pairId: p.id, type: 'term', text: p.term },
      { pairId: p.id, type: 'def', text: p.def },
    ]);
    shuffleInPlace(base);
    return base.map((c, idx) => ({ ...c, uniqueId: idx }));
  };

  const clearTimers = () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    if (previewIntervalRef.current) window.clearInterval(previewIntervalRef.current);
    if (previewTimeoutRef.current) window.clearTimeout(previewTimeoutRef.current);
    if (feedbackTimeoutRef.current) window.clearTimeout(feedbackTimeoutRef.current);
    timerRef.current = null;
    previewIntervalRef.current = null;
    previewTimeoutRef.current = null;
    feedbackTimeoutRef.current = null;
  };

  const showFeedback = (type, message, ms = 1600) => {
    setFeedback({ type, message });
    if (feedbackTimeoutRef.current) window.clearTimeout(feedbackTimeoutRef.current);
    feedbackTimeoutRef.current = window.setTimeout(() => setFeedback(null), ms);
  };

  const resetToIdle = () => {
    clearTimers();
    setCards(buildDeck());
    setSelected([]);
    setMatched([]);
    setMoves(0);
    setSeconds(0);
    setPreviewLeft(6);
    setFeedback(null);
    setLock(false);
    setPhase('idle');
  };

  // init + rebuild deck when content changes
  useEffect(() => {
    resetToIdle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pairsNormalized]);

  // preview flow: 3 seconds, all cards open, then start playing
  useEffect(() => {
    if (phase !== 'preview') return;

    clearTimers();
    setLock(true);
    setSelected([]);
    setMatched([]);
    setMoves(0);
    setSeconds(0);
    setFeedback(null);

    setPreviewLeft(6);
    previewIntervalRef.current = window.setInterval(() => {
      setPreviewLeft((s) => Math.max(0, s - 1));
    }, 1000);

    previewTimeoutRef.current = window.setTimeout(() => {
      if (previewIntervalRef.current) window.clearInterval(previewIntervalRef.current);
      previewIntervalRef.current = null;
      setPhase('playing');
      setLock(false);
      setSelected([]); // flip all down
    }, 5500);

    return () => {
      if (previewIntervalRef.current) window.clearInterval(previewIntervalRef.current);
      if (previewTimeoutRef.current) window.clearTimeout(previewTimeoutRef.current);
      previewIntervalRef.current = null;
      previewTimeoutRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // timer starts after preview ends
  useEffect(() => {
    if (phase !== 'playing') {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
      return;
    }

    timerRef.current = window.setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [phase]);

  // finish detection
  useEffect(() => {
    if (phase !== 'playing') return;
    if (totalPairs > 0 && matched.length === totalPairs) {
      setPhase('finished');
      setLock(true);
    }
  }, [matched.length, phase, totalPairs]);

  const allPreviewOpen = phase === 'preview';

  const isCardFlipped = (card) => {
    if (allPreviewOpen) return true;
    if (matched.includes(card.pairId)) return true;
    return selected.includes(card.uniqueId);
  };

  const canClickCard = (card) => {
    if (phase !== 'playing') return false;
    if (lock) return false;
    if (matched.includes(card.pairId)) return false;
    if (selected.includes(card.uniqueId)) return false;
    if (selected.length >= 2) return false;
    return true;
  };

  const onFlip = (card) => {
    if (!canClickCard(card)) return;

    // First flip: show content, NO feedback yet
    if (selected.length === 0) {
      setSelected([card.uniqueId]);
      return;
    }

    // Second flip: apply rules
    if (selected.length === 1) {
      const firstId = selected[0];
      const first = cards.find((c) => c.uniqueId === firstId);
      const second = card;

      setSelected([firstId, second.uniqueId]);
      setMoves((m) => m + 1);

      if (!first || !second) return;

      // Same type selected → flip only second back after 700ms, keep first open
      if (first.type === second.type) {
        showFeedback('info', t('pickTermDef'), 1500);
        setLock(true);
        window.setTimeout(() => {
          setSelected([firstId]);
          setLock(false);
        }, 700);
        return;
      }

      // Different type selected
      const isMatch = first.pairId === second.pairId;
      if (isMatch) {
        setMatched((prev) => (prev.includes(first.pairId) ? prev : [...prev, first.pairId]));
        showFeedback('ok', t('correct'), 1300);
        setLock(true);
        window.setTimeout(() => {
          setSelected([]);
          setLock(false);
        }, 450);
        return;
      }

      // Wrong match → show both, then flip both back
      showFeedback('bad', t('wrong'), 1600);
      setLock(true);
      window.setTimeout(() => {
        setSelected([]);
        setLock(false);
      }, 900);
    }
  };

  const startGame = () => {
    // Each new game should shuffle deck
    setCards(buildDeck());
    setPhase('preview');
  };

  const restartGame = () => {
    resetToIdle();
  };

  return (
    <div className="cm-wrap">
      <div className="cm-header">
        <div className="cm-head-left">
          <div className="cm-title">{t('title')}</div>
          <div className="cm-sub">{t('subtitle')}</div>
        </div>

        <div className="cm-head-right">
          {phase === 'idle' ? (
            <button type="button" className="cm-btn cm-btn-primary" onClick={startGame} disabled={totalPairs === 0}>
              {t('start')}
            </button>
          ) : (
            <button type="button" className="cm-btn" onClick={restartGame}>
              {t('restart')}
            </button>
          )}
        </div>
      </div>

      {phase === 'idle' && (
        <div className="cm-help">
          <div className="cm-help-title">{t('subtitle')}</div>
          <ul className="cm-help-steps">
            {t('instructions').map((line, idx) => (
              <li key={`instr-${idx}`}>{line}</li>
            ))}
          </ul>
        </div>
      )}

      {phase === 'preview' && (
        <div className="cm-banner cm-banner-preview" role="status" aria-live="polite">
          <span className="cm-banner-emoji" aria-hidden="true">🧠</span>
          <span>{t('previewHint')}</span>
          <span className="cm-countdown">{previewLeft}</span>
        </div>
      )}

      {phase === 'playing' && (
        <div className="cm-stats">
          <div className="cm-pill">
            <span className="cm-pill-label">{t('score')}:</span> {score}/{totalPairs}
          </div>
          <div className="cm-pill">
            <span className="cm-pill-label">{t('moves')}:</span> {moves}
          </div>
          <div className="cm-pill">
            <span className="cm-pill-label">{t('time')}:</span> {formatTime(seconds)}
          </div>
        </div>
      )}

      {feedback && phase !== 'idle' && (
        <div
          className={`cm-feedback ${
            feedback.type === 'ok' ? 'cm-feedback-ok' : feedback.type === 'bad' ? 'cm-feedback-bad' : 'cm-feedback-info'
          }`}
          role="status"
          aria-live="polite"
        >
          <span className="cm-feedback-icon" aria-hidden="true">
            {feedback.type === 'ok' ? '✅' : feedback.type === 'bad' ? '⚠️' : 'ℹ️'}
          </span>
          <span>{feedback.message}</span>
        </div>
      )}

      <div className={`cm-grid ${phase === 'idle' ? 'cm-grid-idle' : ''}`} aria-label={isTurkish ? 'Kartlar' : 'Cards'}>
        {cards.map((card) => {
          const flipped = isCardFlipped(card);
          const disabled = !canClickCard(card);
          const matchedCard = matched.includes(card.pairId);

          return (
            <button
              key={card.uniqueId}
              type="button"
              className={`cm-card ${flipped ? 'is-flipped' : ''} ${matchedCard ? 'is-matched' : ''}`}
              onClick={() => onFlip(card)}
              disabled={disabled}
              aria-label={isTurkish ? 'Kart' : 'Card'}
            >
              <div className="cm-card-inner">
                <div className="cm-card-face cm-card-front" aria-hidden={flipped}>
                  <span className="cm-qmark">?</span>
                </div>
                <div className="cm-card-face cm-card-back" aria-hidden={!flipped}>
                  <div className={`cm-card-text ${card.type === 'term' ? 'cm-term' : 'cm-def'}`}>
                    {card.text}
                  </div>
                  {matchedCard && <span className="cm-check" aria-hidden="true">✔</span>}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {phase === 'finished' && (
        <div className="cm-finish" role="status" aria-live="polite">
          <div className="cm-finish-title">{t('finishedTitle')}</div>
          <div className="cm-finish-sub">{t('finishedSub')}</div>
          <div className="cm-finish-stats">
            <div className="cm-pill">
              <span className="cm-pill-label">{t('score')}:</span> {score}/{totalPairs}
            </div>
            <div className="cm-pill">
              <span className="cm-pill-label">{t('moves')}:</span> {moves}
            </div>
            <div className="cm-pill">
              <span className="cm-pill-label">{t('time')}:</span> {formatTime(seconds)}
            </div>
          </div>
          <button type="button" className="cm-btn cm-btn-primary" onClick={restartGame}>
            {t('restart')}
          </button>
        </div>
      )}

      <style>{`
        .cm-wrap{
          width:100%;
          max-width: 860px;
          margin: 0 auto;
          padding: 16px;
          border-radius: 20px;
          border: 1px solid rgba(99,102,241,.20);
          background: linear-gradient(180deg, rgba(255,255,255,.90), rgba(255,255,255,.78));
          box-shadow:
            0 12px 28px rgba(2,6,23,.08),
            0 1px 0 rgba(255,255,255,.7) inset;
        }

        .cm-header{
          display:flex;
          align-items:flex-start;
          justify-content:space-between;
          gap: 12px;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }
        .cm-title{
          font-weight: 1000;
          font-size: 1.12rem;
          letter-spacing: .2px;
          color: #0f172a;
        }
        .cm-sub{
          margin-top: 4px;
          font-weight: 800;
          color: rgba(15,23,42,.78);
        }

        .cm-btn{
          padding: 9px 12px;
          border-radius: 14px;
          border: 1px solid rgba(15,23,42,.12);
          background: rgba(255,255,255,.9);
          cursor: pointer;
          font-weight: 1000;
          transition: transform .08s ease, box-shadow .18s ease, background .18s ease;
          box-shadow: 0 6px 18px rgba(2,6,23,.06);
          color: #0f172a;
        }
        .cm-btn:hover{
          background: rgba(255,255,255,1);
          box-shadow: 0 10px 24px rgba(2,6,23,.10);
        }
        .cm-btn:active{ transform: scale(.98); }
        .cm-btn:disabled{ opacity: .6; cursor: not-allowed; }

        .cm-btn-primary{
          border: none;
          color: #fff;
          background: linear-gradient(135deg, #6366f1, #3b82f6);
          box-shadow: 0 12px 26px rgba(59,130,246,.22);
        }
        .cm-btn-primary:hover{
          box-shadow: 0 16px 34px rgba(59,130,246,.28);
        }

        .cm-help{
          border-radius: 16px;
          border: 1px solid rgba(99,102,241,.16);
          background: rgba(99,102,241,.08);
          padding: 12px;
          margin: 10px 0 12px;
        }
        .cm-help-title{
          font-weight: 1000;
          margin: 0 0 8px 0;
          color: #0f172a;
        }
        .cm-help-steps{
          margin: 0;
          padding-left: 18px;
          font-weight: 900;
          line-height: 1.45;
          color: rgba(15,23,42,.88);
        }

        .cm-banner{
          display:flex;
          align-items:center;
          justify-content:center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 14px;
          border: 1px solid rgba(15,23,42,.10);
          background: rgba(255,255,255,.85);
          box-shadow: 0 8px 18px rgba(2,6,23,.05);
          margin: 10px 0 12px;
          font-weight: 1000;
          color: rgba(15,23,42,.90);
        }
        .cm-banner-preview{
          border-color: rgba(59,130,246,.20);
          background: rgba(59,130,246,.06);
        }
        .cm-countdown{
          display:inline-flex;
          min-width: 28px;
          height: 28px;
          align-items:center;
          justify-content:center;
          border-radius: 999px;
          background: rgba(99,102,241,.14);
          border: 1px solid rgba(99,102,241,.20);
        }

        .cm-stats{
          display:flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 10px 0 12px;
        }
        .cm-pill{
          padding: 9px 12px;
          border-radius: 999px;
          border: 1px solid rgba(15,23,42,.12);
          background: rgba(255,255,255,.88);
          font-weight: 1000;
          box-shadow: 0 8px 18px rgba(2,6,23,.05);
          color: rgba(15,23,42,.88);
        }
        .cm-pill-label{ opacity: .8; }

        .cm-feedback{
          display:flex;
          align-items:center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 14px;
          border: 1px solid rgba(15,23,42,.10);
          background: rgba(255,255,255,.85);
          box-shadow: 0 8px 18px rgba(2,6,23,.05);
          margin: 10px 0 12px;
          font-weight: 1000;
        }
        .cm-feedback-icon{
          width: 26px;
          height: 26px;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius: 10px;
          background: rgba(15,23,42,.06);
        }
        .cm-feedback-ok{ border-color: rgba(16,185,129,.28); background: rgba(16,185,129,.10); color: #047857; }
        .cm-feedback-bad{ border-color: rgba(244,63,94,.28); background: rgba(244,63,94,.09); color: #be123c; }
        .cm-feedback-info{ border-color: rgba(59,130,246,.28); background: rgba(59,130,246,.08); color: #1d4ed8; }

        .cm-grid{
          display:grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 8px;
        }
        @media (min-width: 720px){
          .cm-grid{ grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }

        .cm-card{
          height: 132px;
          perspective: 1000px;
          border: none;
          padding: 0;
          background: transparent;
          cursor: pointer;
        }
        .cm-card:disabled{ cursor: not-allowed; opacity: .92; }
        .cm-card:focus-visible{
          outline: none;
          box-shadow: 0 0 0 4px rgba(59,130,246,.18);
          border-radius: 16px;
        }

        .cm-card-inner{
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform .45s ease;
        }
        .cm-card.is-flipped .cm-card-inner{
          transform: rotateY(180deg);
        }
        .cm-card-face{
          position: absolute;
          inset: 0;
          border-radius: 16px;
          display:flex;
          align-items:center;
          justify-content:center;
          padding: 10px;
          backface-visibility: hidden;
          border: 1px solid rgba(15,23,42,.12);
          box-shadow:
            0 10px 20px rgba(2,6,23,.06),
            0 1px 0 rgba(255,255,255,.7) inset;
        }

        .cm-card-front{
          background: linear-gradient(135deg, #6366f1, #3b82f6);
          color: #fff;
        }
        .cm-qmark{
          width: 46px;
          height: 46px;
          border-radius: 999px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight: 1000;
          font-size: 1.4rem;
          border: 3px solid rgba(255,255,255,.30);
          background: rgba(255,255,255,.10);
        }

        .cm-card-back{
          background: rgba(255,255,255,.92);
          transform: rotateY(180deg);
          color: #0f172a;
        }
        .cm-card-text{
          font-weight: 1000;
          text-align:center;
          line-height: 1.15;
          letter-spacing: .2px;
        }
        .cm-term{
          font-size: 1.04rem;
          color: #1d4ed8;
        }
        .cm-def{
          font-size: .78rem;
          color: rgba(15,23,42,.78);
        }
        .cm-check{
          position:absolute;
          top: 8px;
          right: 10px;
          color: #16a34a;
          font-weight: 1000;
        }
        .cm-card.is-matched .cm-card-face{
          border-color: rgba(16,185,129,.40);
          box-shadow:
            0 12px 24px rgba(16,185,129,.10),
            0 1px 0 rgba(255,255,255,.7) inset;
        }

        .cm-finish{
          margin-top: 14px;
          padding: 14px;
          border-radius: 18px;
          border: 1px solid rgba(16,185,129,.28);
          background: linear-gradient(180deg, rgba(16,185,129,.14), rgba(16,185,129,.08));
          box-shadow: 0 12px 28px rgba(2,6,23,.06);
          text-align:center;
        }
        .cm-finish-title{
          font-weight: 1000;
          font-size: 1.25rem;
          color: #047857;
          margin-bottom: 4px;
        }
        .cm-finish-sub{
          font-weight: 900;
          color: rgba(15,23,42,.78);
          margin-bottom: 10px;
        }
        .cm-finish-stats{
          display:flex;
          gap: 10px;
          justify-content:center;
          flex-wrap: wrap;
          margin: 10px 0 12px;
        }

        @media (max-width: 520px){
          .cm-card{ height: 124px; }
        }
      `}</style>
    </div>
  );
}
