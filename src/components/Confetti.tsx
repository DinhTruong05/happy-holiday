import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: string;
  delay: string;
  color: string;
}

export const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = [
      "hsl(var(--primary))",
      "hsl(var(--secondary))",
      "hsl(0 72% 51%)",
      "hsl(43 96% 56%)",
      "hsl(280 70% 60%)",
      "hsl(200 70% 60%)",
    ];

    const newPieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 1}s`,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setPieces(newPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-3 h-3 animate-confetti-fall"
          style={{
            left: piece.left,
            backgroundColor: piece.color,
            animationDelay: piece.delay,
            top: "-10vh",
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
