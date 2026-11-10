import React from "react";

// Shared building blocks for the "Verify This Engineer" verification theme.

export function repoShort(url: string): string {
  return url.replace("https://", "");
}

type PillTone = "pass" | "reject" | "neutral" | "stamp";

export function Pill({
  tone = "pass",
  children,
}: {
  tone?: PillTone;
  children: React.ReactNode;
}) {
  const styles: Record<PillTone, string> = {
    pass: "bg-navy text-cream border-navy",
    reject: "bg-stamp text-cream border-stamp",
    neutral: "bg-paper text-navy border-navy/40",
    stamp: "bg-transparent text-stamp border-stamp",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-bold tracking-widest uppercase whitespace-nowrap ${styles[tone]}`}
    >
      {children}
    </span>
  );
}

export function Viewfinder({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`viewfinder ${className}`}>
      <span className="vf-corner vf-tl" />
      <span className="vf-corner vf-tr" />
      <span className="vf-corner vf-bl" />
      <span className="vf-corner vf-br" />
      {children}
    </div>
  );
}

export function Stamp({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`stamp ${className}`}>{children}</span>;
}

const steps = ["Document", "Liveness", "Proof of Work", "Decision"];

export function ProgressTracker({ active = 4 }: { active?: number }) {
  return (
    <div className="border-2 border-navy bg-paper px-4 py-3 sm:px-5">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="font-display text-lg sm:text-xl font-semibold tracking-wide text-navy-deep uppercase">
          Verify This Engineer
        </span>
        <span className="hidden sm:inline text-navy/50" aria-hidden>
          |
        </span>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {steps.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold ${
                  i < active
                    ? "bg-navy text-cream"
                    : "border border-navy/40 text-navy/60"
                }`}
              >
                {i + 1}
              </span>
              <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-navy-deep">
                {step}
              </span>
              {i < active && <span className="text-navy font-bold">✓</span>}
              {i < steps.length - 1 && (
                <span className="text-navy/40 font-bold" aria-hidden>
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function SectionHeading({
  step,
  title,
  sub,
}: {
  step: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-6">
      <p className="text-xs font-bold tracking-[0.25em] uppercase text-stamp">
        {step}
      </p>
      <h2 className="font-display mt-1 text-3xl sm:text-4xl font-semibold uppercase tracking-wide text-navy-deep">
        {title}
      </h2>
      {sub && <p className="mt-2 max-w-2xl text-sm sm:text-base text-ink/70">{sub}</p>}
      <div className="mt-3 h-[3px] w-24 bg-navy" />
    </div>
  );
}
