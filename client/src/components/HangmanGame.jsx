import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './hangman-game.css';

const TR_LETTERS = [
  'A','B','C','Ç','D','E','F','G','Ğ','H','I','İ','J','K','L','M','N','O','Ö','P','R','S','Ş','T','U','Ü','V','Y','Z'
];
const EN_LETTERS = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

function isRevealChar(ch) {
  return ch === ' ' || ch === '-' || ch === '/' || ch === '.' || ch === '_' || ch === '(' || ch === ')' || ch === ':';
}

function normalizeAnswer(raw) {
  if (!raw) return '';
  return String(raw).trim().toLocaleUpperCase('tr-TR');
}

export default function HangmanGame({ isTurkish, data, compact = false }) {
  const t = useMemo(() => {
    const ui = data?.ui || {};
    return {
      title: isTurkish ? (data?.title_tr || ui.title_tr || 'Adam Asmaca') : (data?.title_en || ui.title_en || 'Hangman'),
      desc: isTurkish
        ? (data?.instruction_tr || ui.instruction_tr || 'İpucunu oku, harfleri seç ve kelimeyi bul!')
        : (data?.instruction_en || ui.instruction_en || 'Read the clue, pick letters, and guess the word!'),
      clue: isTurkish ? 'İpucu' : 'Clue',
      word: isTurkish ? 'Kelime' : 'Word',
      lives: isTurkish ? 'Hak' : 'Lives',
      wrong: isTurkish ? 'Yanlış harfler' : 'Wrong letters',
      question: isTurkish ? 'Soru' : 'Question',
      winTitle: isTurkish ? 'Tebrikler!' : 'Great job!',
      loseTitle: isTurkish ? 'Bitti!' : 'Game over!',
      yourAnswer: isTurkish ? 'Cevap' : 'Answer',
      restart: isTurkish ? 'Tekrar Dene' : 'Try Again',
      next: isTurkish ? 'Sonraki Soru' : 'Next Question',
      score: isTurkish ? 'Skor' : 'Score',
      letters: isTurkish ? TR_LETTERS : EN_LETTERS,
      maxWrong: Number.isFinite(data?.settings?.maxWrong)
        ? data.settings.maxWrong
        : (Number.isFinite(data?.maxWrong) ? data.maxWrong : 7),
    };
  }, [isTurkish, data]);

  const items = useMemo(() => {
    const list = data?.items;
    if (!Array.isArray(list)) return [];
    return list
      .filter(Boolean)
      .map((it) => ({
        id: it.id ?? `${it.answer_tr || it.answer_en}-${Math.random()}`,
        clue: isTurkish ? (it.clue_tr || '') : (it.clue_en || ''),
        answer: isTurkish ? (it.answer_tr || '') : (it.answer_en || ''),
      }))
      .filter((x) => x.clue && x.answer);
  }, [data, isTurkish]);

  const [index, setIndex] = useState(0);
  const [guessed, setGuessed] = useState(() => new Set());
  const [wrongCount, setWrongCount] = useState(0);
  const [status, setStatus] = useState('playing');
  const [score, setScore] = useState(0);

  useEffect(() => {
    setIndex(0);
    setGuessed(new Set());
    setWrongCount(0);
    setStatus('playing');
    setScore(0);
  }, [items.length, data?.id]);

  const current = items[index];
  const answer = useMemo(() => normalizeAnswer(current?.answer), [current]);
  const clue = current?.clue || '';

  const answerLetters = useMemo(() => {
    const s = new Set();
    for (const ch of answer) {
      if (!isRevealChar(ch)) s.add(ch);
    }
    return s;
  }, [answer]);

  const wrongLetters = useMemo(
    () => [...guessed].filter((l) => !answerLetters.has(l)),
    [guessed, answerLetters]
  );

  const revealed = useMemo(() => {
    if (!answer) return '';
    let out = '';
    for (const ch of answer) {
      if (isRevealChar(ch)) out += ch;
      else if (guessed.has(ch)) out += ch;
      else out += '•';
    }
    return out;
  }, [answer, guessed]);

  const remaining = t.maxWrong - wrongCount;

  useEffect(() => {
    if (!answer) return;
    if (status !== 'playing') return;
    let all = true;
    for (const ch of answerLetters) {
      if (!guessed.has(ch)) { all = false; break; }
    }
    if (all) { setStatus('won'); setScore((prev) => prev + 1); }
  }, [answer, answerLetters, guessed, status]);

  useEffect(() => {
    if (status !== 'playing') return;
    if (wrongCount >= t.maxWrong) setStatus('lost');
  }, [wrongCount, status, t.maxWrong]);

  const handlePick = (letter) => {
    if (status !== 'playing' || !letter || guessed.has(letter)) return;
    setGuessed((prev) => { const next = new Set(prev); next.add(letter); return next; });
    if (!answerLetters.has(letter)) setWrongCount((prev) => prev + 1);
  };

  const nextQuestion = () => {
    const nextIndex = index + 1 >= items.length ? 0 : index + 1;
    setIndex(nextIndex);
    setGuessed(new Set());
    setWrongCount(0);
    setStatus('playing');
  };

  const restartSame = () => {
    setGuessed(new Set());
    setWrongCount(0);
    setStatus('playing');
  };

  if (!items.length) {
    return (
      <div className="hangman-game hangman-empty">
        <p>{isTurkish ? 'Bu bölüm için adam asmaca soruları bulunamadı.' : 'No hangman items found for this section.'}</p>
      </div>
    );
  }

  const showBase = wrongCount >= 1;
  const showV    = wrongCount >= 2;
  const showH    = wrongCount >= 3;
  const showHead = wrongCount >= 4;
  const showBody = wrongCount >= 5;
  const showArms = wrongCount >= 6;
  const showLegs = wrongCount >= 7;
  const showFace = wrongCount >= 7;

  const dangerLevel = wrongCount >= t.maxWrong - 1 ? 'critical' : wrongCount >= t.maxWrong - 3 ? 'warning' : '';

  return (
    <div className={`hangman-game ${compact ? 'compact' : ''}`}>

      {/* TOP BAR */}
      <div className="hangman-top compact-top">
        {/* Progress */}
        <div className="hm-progress-block">
          <span className="hm-q-label">{t.question} {index + 1} / {items.length}</span>
          <div className="hm-progress-bar">
            <div
              className="hm-progress-fill"
              style={{ width: `${((index + 1) / items.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Score & Lives */}
        <div className="hangman-meta">
          <div className="hangman-pill score-pill">
            <span className="hangman-pill-label">⭐ {t.score}</span>
            <span className="hangman-pill-value">{score}</span>
          </div>
          <div className={`hangman-pill lives-pill ${dangerLevel}`}>
            <span className="hangman-pill-label">❤️ {t.lives}</span>
            <span className="hangman-pill-value">{Math.max(0, remaining)}</span>
          </div>
        </div>
      </div>

      <div className="hangman-card">
        {/* CLUE */}
        <div className="hangman-clue">
          <span className="hangman-clue-icon">💡</span>
          <div>
            <div className="hangman-clue-label">{t.clue}</div>
            <div className="hangman-clue-text">{clue}</div>
          </div>
        </div>

        {/* BOARD */}
        <div className="hangman-board">

          {/* Gallow */}
          <div className={`hangman-gallow ${dangerLevel}`}>
            <div className={`g-line base ${showBase ? 'on' : ''}`} />
            <div className={`g-line v    ${showV    ? 'on' : ''}`} />
            <div className={`g-line h    ${showH    ? 'on' : ''}`} />
            <div className={`g-part head ${showHead ? 'on' : ''}`} />
            <div className={`g-part body ${showBody ? 'on' : ''}`} />
            <div className={`g-part arm left  ${showArms ? 'on' : ''}`} />
            <div className={`g-part arm right ${showArms ? 'on' : ''}`} />
            <div className={`g-part leg left  ${showLegs ? 'on' : ''}`} />
            <div className={`g-part leg right ${showLegs ? 'on' : ''}`} />
            <div className={`g-part face ${showFace ? 'on' : ''}`} />

            {/* Remaining lives as dots */}
            <div className="g-lives">
              {Array.from({ length: t.maxWrong }, (_, i) => (
                <span key={i} className={`g-life-dot ${i < wrongCount ? 'gone' : ''}`} />
              ))}
            </div>
          </div>

          {/* Word + wrong letters */}
          <div className="hangman-right-panel">
            <div className="hangman-word">
              <div className="hangman-word-label">{t.word}</div>
              <div className="hangman-word-value" aria-label="hangman-word">
                {revealed.split('').map((ch, i) => (
                  <span
                    key={i}
                    className={`hm-ch ${ch === '•' ? 'hidden' : 'revealed'} ${ch === ' ' ? 'space' : ''}`}
                  >
                    {ch === '•' ? '' : ch === ' ' ? ' ' : ch}
                  </span>
                ))}
              </div>
            </div>

            {wrongLetters.length > 0 && (
              <div className="hm-wrong-row">
                <span className="hm-wrong-label">✗</span>
                <div className="hm-wrong-chips">
                  {wrongLetters.map((l) => (
                    <span key={l} className="hm-wrong-chip">{l}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* LETTERS */}
        <div className="hangman-letters" aria-label="hangman-letters">
          {t.letters.map((L) => {
            const used = guessed.has(L);
            const good = used && answerLetters.has(L);
            const bad  = used && !answerLetters.has(L);
            return (
              <button
                key={L}
                className={`hm-letter ${good ? 'good' : bad ? 'bad' : used ? 'used' : ''}`}
                onClick={() => handlePick(L)}
                disabled={used || status !== 'playing'}
                type="button"
              >
                {L}
              </button>
            );
          })}
        </div>

        {/* RESULT */}
        <AnimatePresence>
          {status !== 'playing' && (
            <motion.div
              className={`hangman-result ${status}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <div className="hangman-result-emoji">
                {status === 'won' ? '🎉' : '💀'}
              </div>
              <div className="hangman-result-title">
                {status === 'won' ? t.winTitle : t.loseTitle}
              </div>
              <div className="hangman-result-answer">
                <span className="label">{t.yourAnswer}:</span>
                <span className="value">{answer}</span>
              </div>
              <div className="hangman-actions">
                <button className="hm-btn ghost" onClick={restartSame} type="button">
                  🔄 {t.restart}
                </button>
                <button className="hm-btn" onClick={nextQuestion} type="button">
                  {t.next} →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
