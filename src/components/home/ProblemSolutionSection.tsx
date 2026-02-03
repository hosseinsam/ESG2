import { AlertCircle, CheckCircle2, ArrowRight, Ban, Puzzle, DollarSign } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "ESG Compliance Complexity",
    description: "Navigating fragmented regulations across jurisdictions",
  },
  {
    icon: Puzzle,
    title: "Data Fragmentation",
    description: "Scattered sustainability data with no unified view",
  },
  {
    icon: Ban,
    title: "Lack of Incentives",
    description: "No clear ROI on sustainability investments",
  },
];

const solutions = [
  {
    icon: CheckCircle2,
    title: "Unified Compliance Platform",
    description: "Single platform for all ESG standards and reporting",
  },
  {
    icon: CheckCircle2,
    title: "Centralized Intelligence",
    description: "AI-powered data aggregation and real-time insights",
  },
  {
    icon: CheckCircle2,
    title: "Tokenized Rewards",
    description: "Monetize ESG performance with blockchain incentives",
  },
];

export function ProblemSolutionSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why ESGPorts
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            From Compliance Burden to{" "}
            <span className="text-gradient">Competitive Edge</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We transform your ESG challenges into strategic opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Problems Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-destructive flex items-center gap-2 mb-6">
              <AlertCircle className="w-5 h-5" />
              The Challenge
            </h3>
            {problems.map((problem, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl border border-destructive/20 bg-destructive/5 hover:bg-destructive/10 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                    <problem.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{problem.title}</h4>
                    <p className="text-sm text-muted-foreground">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow / Transition */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-emerald-gradient flex items-center justify-center shadow-glow">
                <ArrowRight className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30 animate-[spin_20s_linear_infinite]" />
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-6">
              <CheckCircle2 className="w-5 h-5" />
              The ESGPorts Solution
            </h3>
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <solution.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{solution.title}</h4>
                    <p className="text-sm text-muted-foreground">{solution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
