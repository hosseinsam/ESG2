import { Shield, Leaf, Link, FileCheck, Award } from "lucide-react";

const standards = [
  { icon: Shield, label: "ISO 14001" },
  { icon: Leaf, label: "UN SDGs" },
  { icon: Link, label: "Blockchain" },
  { icon: FileCheck, label: "GRI Standards" },
  { icon: Award, label: "CDP Certified" },
];

const partners = [
  "Global Ports Authority",
  "GreenTech Alliance",
  "Sustainable Finance Hub",
  "CleanEnergy Corp",
  "EcoLogistics Ltd",
];

export function TrustStrip() {
  return (
    <section className="py-12 bg-muted/50 border-y border-border">
      <div className="container-wide">
        {/* Partners */}
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
            Trusted by ESG-driven organizations worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div 
                key={partner}
                className="text-lg font-semibold text-muted-foreground/50 hover:text-foreground transition-colors cursor-default"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Standards */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-8 border-t border-border">
          {standards.map((standard) => (
            <div
              key={standard.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border"
            >
              <standard.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">{standard.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
