export interface WisdomQuote {
  text: string;
  author: string;
  category: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: string;
}

export const galleryImages: GalleryImage[] = [
  { id: "1", src: "/images/gallery/relief-1.png", alt: "Indonesian wood-relief print with tropical botanical motifs", aspectRatio: "4/3" },
  { id: "2", src: "/images/gallery/relief-2.png", alt: "Indonesian wood-relief print with geometric batik patterns", aspectRatio: "3/4" },
  { id: "3", src: "/images/gallery/relief-3.png", alt: "Indonesian wood-relief print of terraced rice paddies", aspectRatio: "16/9" },
  { id: "4", src: "/images/gallery/relief-4.png", alt: "Indonesian wood-relief print featuring tropical birds", aspectRatio: "3/2" },
  { id: "5", src: "/images/gallery/relief-5.png", alt: "Indonesian wood-relief print with temple guardian figures", aspectRatio: "2/3" },
  { id: "6", src: "/images/gallery/relief-6.png", alt: "Indonesian wood-relief print of ocean waves and fishing boats", aspectRatio: "21/9" },
];

export function getDailyQuote(quotes: WisdomQuote[]): WisdomQuote {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  const index = dayOfYear % quotes.length;
  return quotes[index];
}

export function getRandomImage(): GalleryImage {
  const randomIndex = Math.floor(Math.random() * galleryImages.length);
  return galleryImages[randomIndex];
}

export function downloadImage(src: string, filename: string) {
  const link = document.createElement("a");
  link.href = src;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}