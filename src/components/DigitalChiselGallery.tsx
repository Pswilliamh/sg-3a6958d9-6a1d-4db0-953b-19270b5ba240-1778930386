import { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, X, Smartphone, Monitor, Sparkles } from "lucide-react";
import type { GalleryImage, WisdomQuote } from "@/lib/gallery";
import { downloadImage } from "@/lib/gallery";

interface DigitalChiselGalleryProps {
  quotes: WisdomQuote[];
}

// All 48 horizontal images - no duplicates
const horizontalImages: GalleryImage[] = [
  { id: "h1", src: "/images/gallery/horizontal/Christ_In_Creation.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h2", src: "/images/gallery/horizontal/DCG-Becak-Bike.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h3", src: "/images/gallery/horizontal/DCG-Bicycle_Vender-1.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h4", src: "/images/gallery/horizontal/DCG-Bicycle_Vender_Frame.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h5", src: "/images/gallery/horizontal/DCG-Cabe_Chili-Truck.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h6", src: "/images/gallery/horizontal/DCG-Cabe_Truck_frame.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h7", src: "/images/gallery/horizontal/DCG-Farmer_Vender.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h8", src: "/images/gallery/horizontal/DCG-KOI-COLOR.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h9", src: "/images/gallery/horizontal/DCG-Laborer-sacks.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h10", src: "/images/gallery/horizontal/DCG-Market_Begger-Color.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h11", src: "/images/gallery/horizontal/DCG-Market_Vender-2.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h12", src: "/images/gallery/horizontal/DCG-Market_Vender-Man.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h13", src: "/images/gallery/horizontal/DCG-Set-Market_Vender-Buyer.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h14", src: "/images/gallery/horizontal/DCG-VILLAGE_FARMER.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h15", src: "/images/gallery/horizontal/DCG-horse_secretariat.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h16", src: "/images/gallery/horizontal/DCG-secretariat_horse.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h17", src: "/images/gallery/horizontal/Digital_Chisel_Stes-One.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h18", src: "/images/gallery/horizontal/Digital_Chisel_Stes-One_1_.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h19", src: "/images/gallery/horizontal/Digital_Chisel_Stes-One_1_copy.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h20", src: "/images/gallery/horizontal/Digital_Chisel_Stes-One_2_.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h21", src: "/images/gallery/horizontal/Digital_Chisel_Stes-One_3_.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h22", src: "/images/gallery/horizontal/Digital_Chisel_Stes-One_4_.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h23", src: "/images/gallery/horizontal/Digital_Chisel_Stes-One_5_.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h24", src: "/images/gallery/horizontal/Digital_Chisel_Stes-One_copy.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h25", src: "/images/gallery/horizontal/Digital_Javanese-Becak.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h26", src: "/images/gallery/horizontal/Digital_Javanese-Farmer-3.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h27", src: "/images/gallery/horizontal/Digital_Javanese-Farmer-_3_.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h28", src: "/images/gallery/horizontal/Digital_Javanese-Farmer-infograph.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h29", src: "/images/gallery/horizontal/Digital_Javanese-Farmer.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h30", src: "/images/gallery/horizontal/Digital_Javanese-Produce-Cart.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h31", src: "/images/gallery/horizontal/Digital_Javanese-Village_Tree.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h32", src: "/images/gallery/horizontal/Digital_Javanese-Worker-Rice.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h33", src: "/images/gallery/horizontal/Digital_Javanese_Bicicle.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h34", src: "/images/gallery/horizontal/Digital_Javanese_Woodcarving_13_.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h35", src: "/images/gallery/horizontal/Digital_Javanese_Woodcarving_14_.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h36", src: "/images/gallery/horizontal/Digital_JavaneseMarket_Vender-Woman.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h37", src: "/images/gallery/horizontal/Digital-Rice-Javanese_Farmerg_1_.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h38", src: "/images/gallery/horizontal/Gemini_Generated_Image_2_.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h39", src: "/images/gallery/horizontal/KOI-Bedroom_Frame.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h40", src: "/images/gallery/horizontal/KOI-FISH-LILLY.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h41", src: "/images/gallery/horizontal/Koi_Pond.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h42", src: "/images/gallery/horizontal/Market_Vender_Set.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h43", src: "/images/gallery/horizontal/Recycle_Colleteor.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h44", src: "/images/gallery/horizontal/Recycle_Vender_frame.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h45", src: "/images/gallery/horizontal/Woman_Market_VenderFrame.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h46", src: "/images/gallery/horizontal/recycle-vender-1.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h47", src: "/images/gallery/horizontal/recycle_vender.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h48", src: "/images/gallery/horizontal/f9702b1f-8ba3-4062-960c-d71529891842.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
];

// All 23 vertical images - no duplicates
const verticalImages: GalleryImage[] = [
  { id: "v1", src: "/images/gallery/vertical/DCG-Bicycle_Becek.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v2", src: "/images/gallery/vertical/DCG-Bicycle_Vender.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v3", src: "/images/gallery/vertical/DCG-Cabe_Chili_Truck.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v4", src: "/images/gallery/vertical/DCG-CHRIST_copy.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v5", src: "/images/gallery/vertical/DCG-Christ.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v6", src: "/images/gallery/vertical/DCG-Collage.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v7", src: "/images/gallery/vertical/DCG-KOI-LILLY.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v8", src: "/images/gallery/vertical/DCG-Market_Begger-Color-croped.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v9", src: "/images/gallery/vertical/DCG-Market_Begger.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v10", src: "/images/gallery/vertical/DCG-Market_Vender_Woman.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v11", src: "/images/gallery/vertical/DCG-Stall_Vender.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v12", src: "/images/gallery/vertical/DCG-Vender-Broom.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v13", src: "/images/gallery/vertical/DCG-Woman-Market_Vender.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v14", src: "/images/gallery/vertical/DCG-Woman_Market_Buyer.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v15", src: "/images/gallery/vertical/Digital_Chisel_8_.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v16", src: "/images/gallery/vertical/Gemini_Generated_Image_1_.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v17", src: "/images/gallery/vertical/Gemini_Generated_Image_3_.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v18", src: "/images/gallery/vertical/Gemini_Generated_Image_4_.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v19", src: "/images/gallery/vertical/Gemini_Generated_Image_5_.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v20", src: "/images/gallery/vertical/Gemini_Generated_Image_8lgtl8lgtl8lgtl8.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v21", src: "/images/gallery/vertical/Gemini_Generated_Image_8lgtl8lgtl8lgtl8_1_.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v22", src: "/images/gallery/vertical/image.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v23", src: "/images/gallery/vertical/upscale-DCG-Christ.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
];

export function DigitalChiselGallery({ quotes }: DigitalChiselGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedQuote] = useState<WisdomQuote>(quotes[Math.floor(Math.random() * quotes.length)]);
  const [liveWallpaperImages, setLiveWallpaperImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    // Dynamically detect live wallpaper images
    const detectLiveWallpapers = async () => {
      try {
        const response = await fetch('/images/gallery/live-wallpaper/');
        const text = await response.text();
        
        // Simple detection: look for .png, .jpg, .gif in directory listing
        const imageRegex = /([\w-]+\.(png|jpg|jpeg|gif|mp4))/gi;
        const matches = text.match(imageRegex);
        
        if (matches) {
          const images = matches
            .filter(match => !match.includes('.gitkeep'))
            .map((filename, index) => ({
              id: `lw${index + 1}`,
              src: `/images/gallery/live-wallpaper/${filename}`,
              alt: "Animated Digital Chisel wood-relief print",
              orientation: "horizontal" as const
            }));
          setLiveWallpaperImages(images);
        }
      } catch (error) {
        console.log('Live wallpaper detection: folder empty or inaccessible');
      }
    };

    detectLiveWallpapers();
  }, []);

  const handleDownload = () => {
    if (selectedImage) {
      downloadImage(selectedImage.src, `digital-chisel-${selectedImage.id}.png`);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container space-y-16">
        {/* Vertical Images Section - Phone/Android */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Smartphone className="w-6 h-6 text-muted-foreground" />
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">For Phones & Android</h2>
            <Badge variant="outline">{verticalImages.length} Images</Badge>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-2 space-y-2">
            {verticalImages.map((image) => (
              <div
                key={image.id}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative ken-burns-fast hover:scale-105 transition-transform duration-700">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Horizontal Images Section - Tablet/Desktop */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Monitor className="w-6 h-6 text-muted-foreground" />
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">For Tablets & Desktop</h2>
            <Badge variant="outline">{horizontalImages.length} Images</Badge>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-2 space-y-2">
            {horizontalImages.map((image) => (
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
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Live Wallpaper Section - Animated */}
        {liveWallpaperImages.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-6 h-6 text-muted-foreground" />
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Live Wallpapers</h2>
              <Badge variant="secondary" className="ml-2">Animated</Badge>
            </div>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-2 space-y-2">
              {liveWallpaperImages.map((image) => (
                <div
                  key={image.id}
                  className="break-inside-avoid cursor-pointer group relative overflow-hidden"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative ken-burns-fast hover:scale-105 transition-transform duration-700">
                    {image.src.endsWith('.mp4') ? (
                      <video
                        src={image.src}
                        className="w-full h-auto object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    <Badge className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Animated
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
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
                  {selectedImage.src.endsWith('.mp4') ? (
                    <video
                      src={selectedImage.src}
                      className="w-full h-full object-contain"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      fill
                      className="object-contain"
                    />
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                  <div className="bg-card/80 backdrop-blur-md px-8 py-10 md:px-12 md:py-14">
                    <blockquote className="text-center space-y-4">
                      <p className="font-serif text-2xl md:text-3xl leading-relaxed text-foreground">
                        {selectedQuote?.text || ''}
                      </p>
                      <footer className="font-sans text-base md:text-lg text-muted-foreground">
                        — {selectedQuote?.author || ''}
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