import { ArrowRight, Play, Shield, BarChart3, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroVisual from "@/assets/hero-visual.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroVisual} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(215,50%,10%)]/80 to-[hsl(215,50%,10%)]" />
      </div>
      
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-orb w-[600px] h-[600px] bg-primary/20 -top-48 -left-48" style={{ animationDelay: "0s" }} />
        <div className="bg-orb w-[500px] h-[500px] bg-accent/15 top-1/3 right-0 translate-x-1/2" style={{ animationDelay: "-5s" }} />
        <div className="bg-orb w-[400px] h-[400px] bg-primary/10 bottom-0 left-1/3" style={{ animationDelay: "-10s" }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="container-wide relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center stagger-children">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Blockchain-Verified ESG Intelligence
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] tracking-tight mb-6">
            Measure, Improve, and{" "}
            <span className="text-gradient">Monetize</span>{" "}
            ESG Performance
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            The global ESG intelligence ecosystem that transforms sustainability compliance 
            into competitive advantage through AI-powered analytics and blockchain transparency.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
              <Link to="/solutions/assessment">
                Start ESG Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto gap-2" asChild>
              <Link to="/how-it-works">
                <Play className="w-5 h-5" />
                See How It Works
              </Link>
            </Button>
          </div>

          {/* Quick Value Props */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl p-5 text-left">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-1">Compliance Ready</h3>
              <p className="text-sm text-primary-foreground/60">ISO, SDG, and global ESG standards</p>
            </div>
            <div className="glass-card rounded-2xl p-5 text-left">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-3">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-1">AI-Powered Analytics</h3>
              <p className="text-sm text-primary-foreground/60">Real-time ESG intelligence</p>
            </div>
            <div className="glass-card rounded-2xl p-5 text-left">
              <div className="w-12 h-12 rounded-xl bg-mint/20 flex items-center justify-center mb-3">
                <Coins className="w-6 h-6 text-mint" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-1">Tokenized Incentives</h3>
              <p className="text-sm text-primary-foreground/60">Monetize sustainability efforts</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-primary-foreground/50 uppercase tracking-wider">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
