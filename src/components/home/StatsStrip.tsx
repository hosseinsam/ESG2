import { useEffect, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Organizations" },
  { value: 12, suffix: "M", label: "Transactions Verified" },
  { value: 45, suffix: "K", label: "Carbon Tons Offset" },
  { value: 99.9, suffix: "%", label: "Uptime" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
}

export function StatsStrip() {
  return (
    <section className="py-12 bg-primary/5 border-y border-primary/10">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
