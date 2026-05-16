import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExternalLink, Share2, ShoppingBag, Send } from "lucide-react";

export function JAYEmbassy() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleShare = () => {
    alert("Social sharing feature — exports current art + wisdom quote as branded vertical image");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert(`Thank you, ${formData.name}! Your message has been received. We'll respond to ${formData.email} soon.`);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="editorial-container">
        <div className="text-center mb-20">
          <Link
            href="https://drive.google.com/file/d/1bFU3jgD2SyzLkq7TujpgHTKWfxbOPsRI/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block group"
          >
            <Image
              src="/JAY_LOGO_NEW.JPG"
              alt="J.A.Y. Trade School — Click to watch our mission video"
              width={300}
              height={300}
              className="mx-auto mb-8 rounded-lg transition-transform group-hover:scale-105"
            />
            <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex items-center justify-center gap-2">
              Click logo to watch our 1-minute mission video
              <ExternalLink className="w-4 h-4" />
            </p>
          </Link>
        </div>

        <section className="mb-32">
          <h1 className="editorial-heading">Seven Years of Structural Truth</h1>
          <div className="editorial-body space-y-6">
            <p>
              Seven years. This was not a timeline chosen arbitrarily, but one that mirrors the traditional depth of mastery. Ambassador William spent these seven years serving in local Indonesian communities, understanding the grassroots realities of life on a daily basis in cities, villages, and rural settlements.
            </p>
            <p>
              These Digital Chisel Artifacts represent the passion of life captured through those years of service. They are more than digital images; they are anchors of heritage and endurance.
            </p>
            <p>
              At the Junior Architect Group Yayasan (J.A.Y.), our students learn to appreciate this depth. We help them see the structural truth in these artifacts, guiding them to move from a mindset of survival to a mindset of creation. Through your support, we help them become more than they ever imagined they could be.
            </p>
          </div>
        </section>

        <section className="mb-32">
          <h2 className="editorial-heading text-3xl mb-12">Connect with the Digital Chisel Embassy</h2>
          <div className="max-w-2xl mx-auto bg-card/30 backdrop-blur-sm rounded-lg p-8 border border-muted/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-sans">Name</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-muted focus:border-foreground transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-sans">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-muted focus:border-foreground transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground font-sans">Subject</Label>
                <Select
                  value={formData.subject}
                  onValueChange={(value) => setFormData({ ...formData, subject: value })}
                  required
                >
                  <SelectTrigger className="bg-background/50 border-muted focus:border-foreground transition-colors">
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mission">Mission Inquiry</SelectItem>
                    <SelectItem value="support">Artifact Support</SelectItem>
                    <SelectItem value="technical">Technical</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-sans">Message</Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-muted focus:border-foreground transition-colors min-h-[150px] resize-none"
                  placeholder="Share your thoughts with us..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90 text-lg py-6"
                size="lg"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-muted/20">
            <div className="text-center space-y-4">
              <ShoppingBag className="w-12 h-12 mx-auto text-muted-foreground" />
              <h3 className="font-serif text-2xl text-foreground">Order Physical Prints</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Interested in owning a physical Digital Chisel print? Browse our collection of museum-quality Indonesian wood-relief prints available for order.
              </p>
              <Button
                asChild
                variant="outline"
                className="text-lg px-8 py-6"
                size="lg"
              >
                <Link href="https://www.etsy.com/shop/AsianCulturePrints?ref=dashboard-header" target="_blank" rel="noopener noreferrer">
                  Visit Our Etsy Store
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-16">
          <Button
            asChild
            className="bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90 text-lg px-8 py-6"
            size="lg"
          >
            <Link href="https://www.paypal.com/ncp/payment/54E6N3SEK5EXQ" target="_blank" rel="noopener noreferrer">
              Support the Trade School
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
          </Button>

          <Button
            onClick={handleShare}
            variant="outline"
            className="text-lg px-8 py-6"
            size="lg"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Share this Wisdom
          </Button>
        </div>

        <div className="bg-muted/20 rounded-lg p-6 mb-16 border border-muted/30">
          <p className="text-center text-foreground font-serif text-lg">
            🎁 <strong>Free Gift:</strong> Receive exclusive live wallpaper videos with any donation amount
          </p>
          <p className="text-center text-muted-foreground text-sm mt-2">
            Premium animated backgrounds featuring our Digital Chisel artwork
          </p>
        </div>

        <div className="text-center">
          <Link
            href="https://kingdom-embassy.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
          >
            Visit kingdom-embassy.org
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}