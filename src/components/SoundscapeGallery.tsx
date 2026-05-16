import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";
import type { GalleryImage, WisdomQuote } from "@/lib/gallery";
import { galleryImages, downloadImage } from "@/lib/gallery";

interface SoundscapeGalleryProps {
  quotes: WisdomQuote[];
}

export function SoundscapeGallery({ quotes }: SoundscapeGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedQuote] = useState<WisdomQuote>(quotes[Math.floor(Math.random() * quotes.length)]);

  const handleDownload = () => {
    if (selectedImage) {
      downloadImage(selectedImage.src, `digital-chisel-${selectedImage.id}.png`);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-2 space-y-2">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative ken-burns-fast hover:scale-105 transition-transform duration-700">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: image.aspectRatio }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-full w-full h-screen p-0 border-0 bg-background/95 backdrop-blur-sm">
          <div className="relative w-full h-full flex items-center justify-center">
            <Button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-50 bg-card/80 backdrop-blur-md hover:bg-card"
              size="icon"
              variant="ghost"
            >
              <X className="w-6 h-6" />
            </Button>

            {selectedImage && (
              <>
                <div className="relative w-full h-full ken-burns">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                  <div className="bg-card/80 backdrop-blur-md px-8 py-10 md:px-12 md:py-14">
                    <blockquote className="text-center space-y-4">
                      <p className="font-serif text-2xl md:text-3xl leading-relaxed text-foreground">
                        {selectedQuote.text}
                      </p>
                      <footer className="font-sans text-base md:text-lg text-muted-foreground">
                        — {selectedQuote.author}
                      </footer>
                    </blockquote>
                  </div>
                </div>

                <div className="absolute bottom-32 md:bottom-40 right-8">
                  <Button
                    onClick={handleDownload}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                    size="lg"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Apply Wallpaper
                  </Button>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}