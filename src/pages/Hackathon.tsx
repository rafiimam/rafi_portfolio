import { Link } from "react-router-dom";
import { Pill, SectionHeading } from "../components/verify";

const docs = ["Synthetic NID", "Birth Certificate", "Bank-Form Document"];
const verdicts = [
  { label: "Consistent", tone: "bg-navy text-cream" },
  { label: "Discrepancy — Human Review", tone: "bg-stamp text-cream" },
  { label: "Unreadable — Recapture", tone: "bg-navy-deep text-cream" },
];
const facts = [
  { value: "1 / 20,000", label: "selected participants worldwide" },
  { value: "1 / 5,367", label: "solo project among submitted projects" },
  { value: "191", label: "tests" },
  { value: "0", label: "false flags across evaluation batches" },
];

export default function Hackathon() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 pt-6">
      {/* Highlight band */}
      <section className="guilloche-band px-5 py-8 sm:px-8">
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-cream/85">
          Selected Participant — Meta Global AI Developer Hackathon 2026
          (Cerebral Valley)
        </p>
        <h1 className="font-display mt-3 text-5xl sm:text-6xl font-semibold uppercase text-cream">
          DocTrust
        </h1>
        <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-cream/90">
          Selected as 1 of 20,000 participants worldwide from the global
          applicant pool (applications reviewed; selected participants
          received $150 Meta Model API credits). Built DocTrust solo — 1 solo
          project among 5,367 submitted projects. Indie Developer Track, Team
          793.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://github.com/rafiimam/DocTrust"
            target="_blank"
            rel="noreferrer"
            className="bg-cream px-5 py-3 text-sm font-bold tracking-widest uppercase text-navy-deep transition-colors hover:bg-white"
          >
            Product repo · github.com/rafiimam/DocTrust
          </a>
          <a
            href="https://www.youtube.com/watch?v=nMCVk8ayV4o"
            target="_blank"
            rel="noreferrer"
            className="border-2 border-cream px-5 py-3 text-sm font-bold tracking-widest uppercase text-cream transition-colors hover:bg-cream hover:text-navy-deep"
          >
            Watch the demo ↗
          </a>
        </div>
      </section>

      {/* Facts */}
      <div className="mt-8 grid grid-cols-2 border-2 border-navy bg-paper lg:grid-cols-4">
        {facts.map((f, i) => (
          <div
            key={f.label}
            className={`px-5 py-5 ${i > 0 ? "border-l border-navy/20" : ""} ${
              i >= 2 ? "border-t border-navy/20 lg:border-t-0" : ""
            } ${i === 2 ? "border-l-0 lg:border-l" : ""}`}
          >
            <p className="font-display text-4xl font-semibold text-navy">{f.value}</p>
            <p className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wide text-ink/65">
              {f.label}
            </p>
          </div>
        ))}
      </div>

      {/* What it does */}
      <section className="mt-14">
        <SectionHeading
          step="The Product"
          title="A reviewer agent, not an auto-rejector"
          sub="DocTrust cross-examines synthetic NID, birth certificate and bank-form documents against each other. It re-reads uncertain fields, lifts stamp ink when it covers a field, and reports evidence gaps instead of auto-rejecting anything."
        />
        <div className="border-2 border-navy bg-paper p-5 sm:p-7">
          <div className="flex flex-wrap items-stretch justify-center gap-3">
            {docs.map((d) => (
              <span
                key={d}
                className="border-2 border-navy bg-cream px-4 py-4 text-center font-display text-base font-semibold uppercase tracking-wide text-navy-deep"
              >
                {d}
              </span>
            ))}
          </div>
          <div className="py-2 text-center text-2xl font-bold text-stamp" aria-hidden>
            ↓
          </div>
          <div className="mx-auto w-fit bg-navy px-6 py-3.5 text-center font-display text-lg font-semibold uppercase tracking-wider text-cream">
            Reviewer Agent
          </div>
          <div className="py-2 text-center text-2xl font-bold text-stamp" aria-hidden>
            ↓
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {verdicts.map((v) => (
              <span
                key={v.label}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-bold tracking-widest uppercase ${v.tone}`}
              >
                {v.label}
              </span>
            ))}
          </div>
          <ul className="mx-auto mt-7 max-w-2xl space-y-2.5">
            <li className="flex gap-2.5 text-sm leading-relaxed text-ink/80">
              <span className="font-bold text-navy">✓</span>
              Cross-examines the same fact across documents and reports where
              the evidence disagrees.
            </li>
            <li className="flex gap-2.5 text-sm leading-relaxed text-ink/80">
              <span className="font-bold text-navy">✓</span>
              Re-reads uncertain fields and reports evidence gaps — missing or
              unreadable evidence is never treated as fraud.
            </li>
            <li className="flex gap-2.5 text-sm leading-relaxed text-ink/80">
              <span className="font-bold text-navy">✓</span>
              Built solo in two weeks: 191 tests, zero false flags across the
              evaluation batches.
            </li>
          </ul>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Pill tone="neutral">Indie Developer Track</Pill>
            <Pill tone="neutral">Team 793</Pill>
            <Pill tone="pass">Participant — 5,367 projects worldwide</Pill>
          </div>
        </div>
        <p className="mt-6 text-sm">
          <Link
            to="/projects"
            className="font-bold text-navy underline decoration-stamp decoration-2 underline-offset-4 hover:text-stamp"
          >
            ← Back to the full proof of work
          </Link>
        </p>
      </section>
    </div>
  );
}
