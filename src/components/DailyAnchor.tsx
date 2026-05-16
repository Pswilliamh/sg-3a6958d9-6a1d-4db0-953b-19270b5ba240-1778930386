import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { WisdomQuote, GalleryImage } from "@/lib/gallery";
import { getDailyQuote, downloadImage, getRandomImage } from "@/lib/gallery";

interface DailyAnchorProps {
  quotes: WisdomQuote[];
}

export function DailyAnchor({ quotes }: DailyAnchorProps) {
  const [dailyQuote, setDailyQuote] = useState<WisdomQuote | null>(null);
  const [dailyImage, setDailyImage] = useState<GalleryImage | null>(null);
  const [isUIHidden, setIsUIHidden] = useState(false);
  const [longPressTimer, setLongPressTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setDailyQuote(getDailyQuote(quotes));
    setDailyImage(getRandomImage());
  }, [quotes]);

  const handleLongPressStart = () => {
    const timer = setTimeout(() => {
      setIsUIHidden((prev) => !prev);
    }, 800);
    setLongPressTimer(timer);
  };

  const handleLongPressEnd = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
  };

  const handleDownload = () => {
    if (dailyImage) {
      downloadImage(dailyImage.src, `digital-chisel-${dailyImage.id}.png`);
    }
  };

  if (!dailyQuote || !dailyImage) return null;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      <div
        className="absolute inset-0"
        onMouseDown={handleLongPressStart}
        onMouseUp={handleLongPressEnd}
        onMouseLeave={handleLongPressEnd}
        onTouchStart={handleLongPressStart}
        onTouchEnd={handleLongPressEnd}
      >
        <div className="relative w-full h-full ken-burns">
          <Image
            src={dailyImage.src}
            alt={dailyImage.alt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div
        className={`absolute top-6 right-6 transition-opacity duration-500 ${
          isUIHidden ? "opacity-0 pointer-events-none" : "opacity-30"
        }`}
      >
        <Image
          src="/images/logos/digital-chisel-logo.png"
          alt="Digital Chisel Gallery"
          width={80}
          height={80}
          className="drop-shadow-lg"
        />
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 transition-opacity duration-500 ${
          isUIHidden ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="bg-card/80 backdrop-blur-md px-8 py-10 md:px-12 md:py-14">
          <blockquote className="text-center space-y-4">
            <p className="font-serif text-2xl md:text-3xl leading-relaxed text-foreground">
              {dailyQuote.text}
            </p>
            <footer className="font-sans text-base md:text-lg text-muted-foreground">
              — {dailyQuote.author}
            </footer>
          </blockquote>
        </div>
      </div>

      <div
        className={`absolute bottom-32 md:bottom-40 right-8 transition-opacity duration-500 ${
          isUIHidden ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Button
          onClick={handleDownload}
          className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
          size="lg"
        >
          <Download className="w-5 h-5 mr-2" />
          Apply Wallpaper
        </Button>
      </div>
    </div>
  );
}