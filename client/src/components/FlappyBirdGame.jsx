import { useState, useEffect, useRef, useCallback } from 'react';

function FlappyBirdGame({ isTurkish }) {
  const canvasRef = useRef(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const gameOverRef = useRef(false);
  const animRef = useRef(null);
  const velocityRef = useRef(0);

  const GRAVITY = 0.3;
  const JUMP_FORCE = -6;
  const PIPE_SPEED = 2;
  const PIPE_GAP = 200;
  const PIPE_INTERVAL = 130;

  // ✅ FIX: Space tuşunda sayfa kaymayı engelle
  const handleJump = useCallback((e) => {
    if (
      e?.type === 'keydown' &&
      (e.code === 'Space' || e.key === ' ' || e.key === 'ArrowUp')
    ) {
      e.preventDefault(); // ✅ sayfa kaymıyor artık
    }
    if (!gameOverRef.current) {
      velocityRef.current = JUMP_FORCE;
    }
  }, []);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    let birdY = H / 2;
    let pipes = [];
    let frame = 0;
    velocityRef.current = 0;
    gameOverRef.current = false;

    const loop = () => {
      if (gameOverRef.current) return;

      ctx.clearRect(0, 0, W, H);

      // Arka plan
      ctx.fillStyle = '#87CEEB';
      ctx.fillRect(0, 0, W, H);

      // Yerçekimi
      velocityRef.current += GRAVITY;
      birdY += velocityRef.current;

      // Kuş
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.roundRect(50, birdY, 30, 30, 6);
      ctx.fill();
      ctx.strokeStyle = '#B8860B';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Göz
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(68, birdY + 9, 3, 0, Math.PI * 2);
      ctx.fill();

      // Borular
      if (frame % PIPE_INTERVAL === 0) {
        const gapY = Math.random() * 140 + 60;
        pipes.push({ x: W, gapY });
      }

      pipes.forEach((pipe) => {
        pipe.x -= PIPE_SPEED;

        ctx.fillStyle = '#2ECC40';
        ctx.strokeStyle = '#27AE60';
        ctx.lineWidth = 2;

        ctx.fillRect(pipe.x, 0, 50, pipe.gapY);
        ctx.strokeRect(pipe.x, 0, 50, pipe.gapY);
        ctx.fillRect(pipe.x, pipe.gapY + PIPE_GAP, 50, H);
        ctx.strokeRect(pipe.x, pipe.gapY + PIPE_GAP, 50, H);

        // Çarpışma (4px tolerans)
        const margin = 4;
        if (pipe.x < 80 + margin && pipe.x + 50 > 50 + margin) {
          if (birdY < pipe.gapY - margin || birdY + 30 > pipe.gapY + PIPE_GAP + margin) {
            gameOverRef.current = true;
            setGameOver(true);
          }
        }

        if (Math.floor(pipe.x) === 49) {
          setScore((s) => s + 1);
        }
      });

      pipes = pipes.filter((p) => p.x > -60);

      if (birdY > H) {
        gameOverRef.current = true;
        setGameOver(true);
      }

      // Puan
      ctx.fillStyle = 'rgba(0,0,0,0.45)';
      ctx.font = 'bold 20px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(score, W / 2, 32);

      frame++;
      animRef.current = requestAnimationFrame(loop);
    };

    // ✅ FIX: keydown listener'a { passive: false } ekle — preventDefault çalışsın
    const onKey = (e) => handleJump(e);
    window.addEventListener('keydown', onKey, { passive: false });
    animRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('keydown', onKey);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [gameStarted, gameOver, handleJump]);

  const handleRestart = () => {
    gameOverRef.current = false;
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setScore(0);
    setGameOver(false);
    setGameStarted(false);
    setTimeout(() => setGameStarted(true), 50);
  };

  const handleStart = () => {
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
  };

  return (
    // ✅ FIX: max-w ile genişlik sınırlandı, padding azaltıldı
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#38bdf8',
      borderRadius: '16px',
      padding: '16px',
      maxWidth: '420px',
      margin: '0 auto',
      gap: '10px',
    }}>
      <h2 style={{ color: 'white', fontWeight: 900, fontSize: '1.3rem', margin: 0 }}>
        🐦 Cyber Bird
      </h2>

      {/* ✅ FIX: canvas küçültüldü — 400x340 */}
      <canvas
        ref={canvasRef}
        width={380}
        height={340}
        onClick={() => handleJump({})}
        style={{
          borderRadius: '10px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
          cursor: 'pointer',
          display: 'block',
        }}
      />

      <div style={{ color: 'white', fontWeight: 700, fontSize: '1rem' }}>
        {isTurkish ? 'Puan:' : 'Score:'}{' '}
        <span style={{ color: '#fde047', fontSize: '1.2rem' }}>{score}</span>
      </div>

      {!gameStarted && !gameOver && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <button
            onClick={handleStart}
            style={{
              padding: '10px 28px',
              background: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '999px',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            {isTurkish ? '▶ Başla' : '▶ Start'}
          </button>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.8rem', margin: 0 }}>
            {isTurkish ? '💡 Tıkla veya Boşluk tuşuna bas' : '💡 Click or press Space to jump'}
          </p>
        </div>
      )}

      {gameOver && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <p style={{ color: 'white', fontWeight: 700, margin: 0 }}>
            {isTurkish ? `Oyun Bitti! Puanın: ${score}` : `Game Over! Score: ${score}`}
          </p>
          <button
            onClick={handleRestart}
            style={{
              padding: '10px 28px',
              background: '#dc2626',
              color: 'white',
              border: 'none',
              borderRadius: '999px',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            {isTurkish ? '🔄 Tekrar Dene' : '🔄 Try Again'}
          </button>
        </div>
      )}

      {gameStarted && !gameOver && (
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.8rem', margin: 0 }}>
          {isTurkish ? '💡 Tıkla veya Boşluk ile zıpla' : '💡 Click or Space to jump'}
        </p>
      )}
    </div>
  );
}

export default FlappyBirdGame;