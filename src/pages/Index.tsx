import { SpinWheel } from "@/components/SpinWheel";
import { BookOpen, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      {/* Decorative elements */}
      <div className="fixed top-10 left-10 opacity-20">
        <BookOpen className="w-24 h-24 text-primary animate-float" />
      </div>
      <div className="fixed bottom-10 right-10 opacity-20">
        <Heart className="w-24 h-24 text-secondary animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
        <SpinWheel />
        
        <footer className="mt-12 text-center text-muted-foreground animate-fade-in">
          <p className="text-sm">
            Được tạo với ❤️ để tri ân thầy cô
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
