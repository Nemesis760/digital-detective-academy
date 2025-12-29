import { useState, useEffect, useRef } from 'react';

function FlappyBirdGame({ isTurkish }) {
  const canvasRef = useRef(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (!gameStarted || gameOver) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let birdY = 200;
    let birdVelocity = 0;
    let pipes = [];
    let frame = 0;

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Bird
      birdVelocity += 0.5;
      birdY += birdVelocity;
      ctx.fillStyle = 'yellow';
      ctx.fillRect(50, birdY, 30, 30);

      // Pipes
      if (frame % 100 === 0) {
        pipes.push({ x: canvas.width, y: Math.random() * 200 + 50 });
      }
      pipes.forEach((pipe, i) => {
        pipe.x -= 3;
        ctx.fillStyle = 'green';
        ctx.fillRect(pipe.x, 0, 50, pipe.y);
        ctx.fillRect(pipe.x, pipe.y + 150, 50, canvas.height);

        if (pipe.x < 80 && pipe.x > 0 && (birdY < pipe.y || birdY > pipe.y + 120)) {
          setGameOver(true);
        }
        if (pipe.x === 50) setScore(s => s + 1);
      });
      pipes = pipes.filter(p => p.x > -50);

      if (birdY > canvas.height || birdY < 0) setGameOver(true);

      frame++;
      if (!gameOver) requestAnimationFrame(loop);
    };

    const handleJump = () => birdVelocity = -8;
    window.addEventListener('keydown', handleJump);
    const anim = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('keydown', handleJump);
      cancelAnimationFrame(anim);
    };
  }, [gameStarted, gameOver]);

  return (
    <div className="flappy-game flex flex-col items-center bg-sky-400 p-4 rounded-xl">
      <h2 className="text-white text-2xl font-bold mb-2">Cyber Bird</h2>
      <canvas ref={canvasRef} width={400} height={400} className="bg-white rounded shadow-lg" />
      <div className="mt-4 text-white font-bold">
        {isTurkish ? 'Puan:' : 'Score:'} {score}
      </div>
      {!gameStarted && (
        <button onClick={() => setGameStarted(true)} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full">
          {isTurkish ? 'Başla' : 'Start'}
        </button>
      )}
      {gameOver && (
        <button onClick={() => window.location.reload()} className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full">
          {isTurkish ? 'Tekrar Dene' : 'Try Again'}
        </button>
      )}
    </div>
  );
}

export default FlappyBirdGame;
