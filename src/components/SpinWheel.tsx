import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, Sparkles } from "lucide-react";
import Confetti from "./Confetti";

const wishes = [
  "Chúc thầy/cô luôn tràn đầy năng lượng và niềm vui trong mỗi bài giảng! 🌟",
  "Cảm ơn thầy/cô đã dành trọn tâm huyết để truyền đạt tri thức! 📚",
  "Chúc thầy/cô sức khỏe dồi dào, công tác thành công rực rỡ! 💪",
  "Thầy/cô là ngọn đèn soi sáng con đường tri thức cho chúng em! 💡",
  "Lời dạy của thầy/cô mãi là kim chỉ nam cho con đường phía trước! 🧭",
  "Chúc thầy/cô luôn hạnh phúc, được đền đáp xứng đáng! 🌸",
  "Cảm ơn thầy/cô đã tin tưởng và động viên chúng em không ngừng! 🙏",
  "Chúc thầy/cô ngày 20/11 thật ý nghĩa và ấm áp! ❤️",
  "Thầy/cô là người thầy tuyệt vời nhất trong lòng chúng em! 🌈",
  "Chúc thầy/cô luôn tươi trẻ, xinh đẹp và tràn đầy năng lượng! ✨",
  "Cảm ơn thầy/cô đã làm cho lớp học trở nên vui vẻ và bổ ích! 🎨",
  "Chúc thầy/cô thành công trong sự nghiệp và hạnh phúc trong cuộc sống! 🎯",
];

export const SpinWheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [currentWish, setCurrentWish] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [showWishPopup, setShowWishPopup] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);

  const handleSpin = () => {
    if (spinning) return;

    setSpinning(true);
    setCurrentWish("");
    setShowConfetti(false);
    setShowWishPopup(false);

    // Sound effect
    const audio = new Audio(
      "data:audio/wav;base64,UklGRhwAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA="
    );
    audio.volume = 0.3;
    audio.play().catch(() => {});

    // Spin fake animation
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * wishes.length);
      setCurrentWish(wishes[randomIndex]);
      setSpinning(false);
      setShowConfetti(true);
      setShowWishPopup(true);

      setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
    }, 4000);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto px-4">

        {showWishPopup && currentWish && (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center">

        {/* Mờ nền */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-bg-fade"
          onClick={() => setShowWishPopup(false)}
        />

        {/* Hộp popup 3D TikTok */}
        <div className="relative max-w-2xl mx-auto p-10 rounded-3xl bg-white shadow-2xl border border-primary/40 animate-popup-3d">
          <h2 className="text-4xl font-bold text-primary text-center mb-6 animate-soft-glow">
            ✨ Lời Chúc 20/11 ✨
          </h2>

          <p className="text-2xl text-center font-medium leading-relaxed animate-text-rise">
            {currentWish}
          </p>

          <button
            onClick={() => setShowWishPopup(false)}
            className="mt-8 px-6 py-3 block mx-auto rounded-xl bg-primary text-white font-semibold shadow hover:bg-primary/90 transition-all"
          >
            Đóng
          </button>
        </div>
      </div>
    )}


      {showConfetti && <Confetti />}

      <div className="text-center mb-8 space-y-2 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Vòng Quay May Mắn
        </h1>
        <p className="text-lg text-muted-foreground">
          Chúc mừng ngày Nhà giáo Việt Nam 20/11
        </p>
      </div>

      <Card className="relative overflow-hidden shadow-2xl border-4 border-primary/20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />

        <div className="relative p-8 flex flex-col items-center gap-8">

          {/* Wheel */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 blur-2xl animate-pulse" />

            <div
              ref={wheelRef}
              className={`relative w-64 h-64 rounded-full border-8 border-primary shadow-xl ${
                spinning ? "animate-spin-wheel" : ""
              }`}
              style={{
                background:
                  "conic-gradient(from 0deg, hsl(var(--primary)) 0deg 30deg, hsl(var(--secondary)) 30deg 60deg, hsl(var(--primary)) 60deg 90deg, hsl(var(--secondary)) 90deg 120deg, hsl(var(--primary)) 120deg 150deg, hsl(var(--secondary)) 150deg 180deg, hsl(var(--primary)) 180deg 210deg, hsl(var(--secondary)) 210deg 240deg, hsl(var(--primary)) 240deg 270deg, hsl(var(--secondary)) 270deg 300deg, hsl(var(--primary)) 300deg 330deg, hsl(var(--secondary)) 330deg 360deg)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-background rounded-full shadow-lg flex items-center justify-center">
                  <Gift className="w-10 h-10 text-primary animate-float" />
                </div>
              </div>

              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-12 border-l-transparent border-r-transparent border-t-primary drop-shadow-lg" />
            </div>
          </div>

          <Button
            size="lg"
            onClick={handleSpin}
            disabled={spinning}
            className="relative px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            {spinning ? "Đang quay..." : "Tìm lời chúc"}
            <Sparkles className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </Card>
    </div>
  );
};
