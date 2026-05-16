import { useState, useEffect } from "react";
import { SEO } from "@/components/SEO";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DailyAnchor } from "@/components/DailyAnchor";
import { DigitalChiselGallery } from "@/components/DigitalChiselGallery";
import { JAYEmbassy } from "@/components/JAYEmbassy";
import type { WisdomQuote } from "@/lib/gallery";

export default function Home() {
  const [quotes, setQuotes] = useState<WisdomQuote[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/data/wisdom-quotes.json")
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading wisdom quotes:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-muted border-t-primary rounded-full animate-spin mx-auto" />
          <p className="font-sans text-muted-foreground">Loading sanctuary...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Digital Chisel Gallery — Asian Culture Prints"
        description="A premium digital sanctuary for Indonesian wood-relief prints. Daily wisdom quotes, ambient soundscapes, and contemplative art curated by Digital Chisel Gallery in partnership with J.A.Y. Trade School."
        image="/og-image.png"
      />

      <Tabs defaultValue="anchor" className="w-full">
        <TabsList className="fixed top-0 left-0 right-0 z-50 w-full rounded-none border-b bg-card/80 backdrop-blur-md h-14">
          <div className="container flex items-center justify-center h-full">
            <TabsTrigger
              value="anchor"
              className="font-serif text-base data-[state=active]:bg-background data-[state=active]:text-foreground"
            >
              The Daily Anchor
            </TabsTrigger>
            <TabsTrigger
              value="gallery"
              className="font-serif text-base data-[state=active]:bg-background data-[state=active]:text-foreground"
            >
              Digital Chisel Gallery
            </TabsTrigger>
            <TabsTrigger
              value="embassy"
              className="font-serif text-base data-[state=active]:bg-background data-[state=active]:text-foreground"
            >
              The J.A.Y. Embassy
            </TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="anchor" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
          <DailyAnchor quotes={quotes} />
        </TabsContent>

        <TabsContent value="gallery" className="mt-14 focus-visible:outline-none focus-visible:ring-0">
          <DigitalChiselGallery quotes={quotes} />
        </TabsContent>

        <TabsContent value="embassy" className="mt-14 focus-visible:outline-none focus-visible:ring-0">
          <JAYEmbassy />
        </TabsContent>
      </Tabs>
    </>
  );
}