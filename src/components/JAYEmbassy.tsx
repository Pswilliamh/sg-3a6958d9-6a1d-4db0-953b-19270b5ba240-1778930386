import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, Share2 } from "lucide-react";

export function JAYEmbassy() {
  const handleShare = () => {
    alert("Social sharing feature — exports current art + wisdom quote as branded vertical image");
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="editorial-container">
        <div className="text-center mb-20">
          <Image
            src="/images/logos/jay-logo.png"
            alt="J.A.Y. Trade School"
            width={200}
            height={200}
            className="mx-auto mb-8"
          />
        </div>

        <section className="mb-32">
          <h1 className="editorial-heading">The 7-Year Residency</h1>
          <div className="editorial-body space-y-6">
            <p>
              In the shadow of ancient temples, where wood and stone remember centuries of devotion, 
              the Digital Chisel Gallery operates a singular apprenticeship program. Seven years. 
              Not a timeline chosen arbitrarily, but one that mirrors the traditional craft training 
              of Kyoto's master artisans.
            </p>
            <p>
              Each resident commits to this duration not as a constraint, but as a liberation from 
              the tyranny of quick mastery. The first year is spent in observation. The second in 
              imitation. By the third, the hands begin to remember what the mind cannot articulate. 
              Years four through six refine what is remembered. The seventh year is where the 
              technique becomes indistinguishable from the self.
            </p>
            <p>
              This is not romantic nostalgia. It is structural necessity. The relief prints you 
              encounter in this sanctuary are not decoration — they are evidence of sustained 
              attention, of minds trained to see what haste blinds us to.
            </p>
          </div>
        </section>

        <section className="mb-32">
          <h2 className="editorial-heading">The Digital Chisel Technique</h2>
          <div className="editorial-body space-y-6">
            <p>
              Traditional Indonesian woodblock printing demands physical strength and spatial 
              intuition. The chisel must know wood grain the way water knows stone — not through 
              force, but through patient conversation. Our technique transposes this physical 
              literacy into the digital realm without diluting its rigor.
            </p>
            <p>
              We do not scan. We do not trace. We reconstruct. Every line you see in these prints 
              began as a study in pressure, in the angle at which light reveals texture, in the 
              subtle variations that separate craft from automation. The digital chisel is not a 
              shortcut — it is a translation that honors the original while speaking in contemporary 
              grammar.
            </p>
            <p>
              The result is relief work that retains the breathing quality of hand-carved 
              blocks while existing in a medium that can reach contemplatives worldwide. Each print 
              carries forward the paradox at the heart of all meaningful technique: constraint as 
              the condition of expression.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="editorial-heading">The J.A.Y. Trade School</h2>
          <div className="editorial-body space-y-6">
            <p>
              J.A.Y. Trade School exists to preserve what industrial education systems routinely 
              discard: the understanding that mastery cannot be rushed, that certain forms of 
              knowledge require time measured in seasons rather than semesters.
            </p>
            <p>
              We train not to produce workers, but to cultivate practitioners who understand their 
              craft as a mode of being, not merely a mode of production. The school operates on 
              principles borrowed from guild apprenticeships, monastic study, and studio practice — 
              contexts where learning is inseparable from transformation.
            </p>
            <p>
              Our curriculum is simple: show up. Pay attention. Repeat. Allow failure to instruct. 
              Trust that seven years of this will yield more than seven months of optimization ever 
              could. The gallery you are experiencing is one expression of what this yields.
            </p>
          </div>
        </section>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-16">
          <Button
            asChild
            className="bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90 text-lg px-8 py-6"
            size="lg"
          >
            <Link href="https://kingdom-embassy.org" target="_blank" rel="noopener noreferrer">
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