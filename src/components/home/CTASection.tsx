import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-orb w-[500px] h-[500px] bg-primary/20 -top-32 -right-32" style={{ animationDelay: "0s" }} />
        <div className="bg-orb w-[400px] h-[400px] bg-accent/15 bottom-0 left-1/4" style={{ animationDelay: "-7s" }} />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Start Your ESG Journey Today
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Turn ESG Compliance Into{" "}
            <span className="text-gradient">Competitive Advantage</span>
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
            Join leading organizations worldwide that are transforming sustainability 
            from a compliance requirement into a driver of business value.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/solutions/assessment">
                Request ESG Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                Talk to an Expert
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/60">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Free Initial Consultation
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              No Credit Card Required
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Results in 48 Hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
