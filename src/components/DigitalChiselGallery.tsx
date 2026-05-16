import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Volume2, VolumeX, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import type { WisdomQuote } from "@/lib/gallery";
import { galleryImages, getRandomQuote } from "@/lib/gallery";

interface DigitalChiselGalleryProps {
  quotes: WisdomQuote[];
}

export function DigitalChiselGallery({ quotes }: DigitalChiselGalleryProps) {
  const [currentQuote, setCurrentQuote] = useState<WisdomQuote | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { isPlaying, volume, togglePlay, setVolume } = useAudioPlayer("/audio/piano-loop.mp3");
  const animationRef = useRef<number>();
  const lastTransitionRef = useRef<number>(Date.now());

  useEffect(() => {
    if (quotes.length > 0) {
      setCurrentQuote(getRandomQuote(quotes));
    }
  }, [quotes]);

  useEffect(() => {
    const animate = () => {
      const now = Date.now();
      const timeSinceLastTransition = now - lastTransitionRef.current;

      if (timeSinceLastTransition >= 60000) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
          setCurrentQuote(getRandomQuote(quotes));
          setIsTransitioning(false);
          lastTransitionRef.current = now;
        }, 3000);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [quotes]);

  const handleImageClick = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const handleDownload = async (imagePath: string) => {
    try {
      const response = await fetch(imagePath);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = imagePath.split("/").pop() || "image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-20 left-0 right-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between max-w-md mx-auto">
            <Button
              variant="ghost"
              size="icon"
              onClick={togglePlay}
              className="h-10 w-10"
            >
              {isPlaying ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
            </Button>
            <div className="flex-1 mx-4">
              <Slider
                value={[volume]}
                onValueChange={([v]) => setVolume(v)}
                max={1}
                step={0.01}
                className="w-full"
              />
            </div>
            <span className="text-sm text-muted-foreground w-12 text-right">
              {Math.round(volume * 100)}%
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="relative mb-16 h-[60vh] max-w-4xl mx-auto overflow-hidden rounded-lg">
          <div
            className={`absolute inset-0 transition-opacity duration-3000 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="relative w-full h-full animate-ken-burns">
              <Image
                src={galleryImages[currentImageIndex]}
                alt="Featured wood relief"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          {currentQuote && (
            <div className="absolute inset-0 flex items-center justify-center p-8 bg-black/20">
              <div className="text-center">
                <p className="text-white text-2xl md:text-3xl font-serif mb-4 drop-shadow-lg">
                  "{currentQuote.text}"
                </p>
                <p className="text-white/80 text-lg drop-shadow-lg">
                  — {currentQuote.author}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => handleImageClick(image)}
            >
              <div className="relative animate-ken-burns-slow">
                <Image
                  src={image}
                  alt={`Wood relief ${index + 1}`}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <Button
                  variant="secondary"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(image);
                  }}
                >
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Full size image"
              fill
              className="object-contain"
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4"
              onClick={(e) => {
                e.stopPropagation();
                handleDownload(selectedImage);
              }}
            >
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes ken-burns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        @keyframes ken-burns-slow {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.05);
          }
        }

        .animate-ken-burns {
          animation: ken-burns 60s ease-in-out infinite alternate;
        }

        .animate-ken-burns-slow {
          animation: ken-burns-slow 30s ease-in-out infinite alternate;
        }

        .duration-3000 {
          transition-duration: 3s;
        }
      `}</style>
    </div>
  );
}