import { Link } from "react-router-dom";
import { projects, Project } from "../data";
import {
  Pill,
  ProgressTracker,
  SectionHeading,
  Stamp,
  Viewfinder,
  repoShort,
} from "../components/verify";
import DownloadCvButton from "../components/DownloadCvButton";

const BEACH_PHOTO =
  "https://rafiimam.github.io/Personal-website/images/rafi-beach.svg";

const banking = projects.filter((p) => p.category === "banking");

const byId = (id: number): Project =>
  banking.find((p) => p.id === id) as Project;

const mapGroups: { title: string; ids: number[] }[] = [
  { title: "Identity & Onboarding", ids: [0, 1, 2, 3, 8] },
  { title: "Payments & Core", ids: [4, 10, 9, 14, 13] },
  { title: "Channels & Internal", ids: [6, 11, 5, 25, 12, 7, 24, 15] },
];

const stack = [
  "Python",
  "TypeScript",
  "FastAPI",
  "PyTorch / CUDA",
  "Apache Kafka",
  "React",
  "ASP.NET Core",
  "PostgreSQL / pgvector",
  "Docker",
  "Kubernetes",
];

const stats = [
  { value: "30+", label: "production services" },
  { value: "18", label: "banking systems" },
  { value: "0.00%", label: "false accepts on the locked test set" },
  {
    value: "1 / 20,000",
    label: "selected hackathon participants — 1 solo project among 5,367",
  },
];

function LivenessRow({
  label,
  result,
  tone,
  note,
}: {
  label: string;
  result: string;
  tone: "pass" | "reject";
  note?: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-navy/15 py-2.5 last:border-0">
      <span className="text-sm font-semibold text-ink">{label}</span>
      {note && <span className="text-xs text-ink/60">{note}</span>}
      <span className="ml-auto">
        <Pill tone={tone}>{result}</Pill>
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-16">
      {/* ---------- Cover ---------- */}
      <section className="pt-6">
        <ProgressTracker />

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-stamp">
              eKYC verification — portfolio edition
            </p>
            <h1 className="font-display mt-3 text-6xl sm:text-7xl xl:text-8xl font-semibold uppercase leading-[0.95] text-navy-deep">
              Verify This
              <br />
              Engineer
            </h1>
            <p className="mt-6 font-display text-2xl sm:text-3xl font-medium tracking-wide text-ink uppercase">
              MD. Rafi Imam
            </p>
            <p className="mt-1 text-base sm:text-lg text-ink/75">
              Software Development Officer, AI &amp; Automation — Dhaka,
              Bangladesh
            </p>
            <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-ink/70">
              Before you hire an engineer, verify him. The document is
              authentic, the subject is live, and the proof of work is below —
              payments, core banking and eKYC systems running in production.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="bg-navy px-5 py-3 text-sm font-bold tracking-widest uppercase text-cream transition-colors hover:bg-navy-deep"
              >
                Step 3 · Proof of Work
              </Link>
              <Link
                to="/hackathon"
                className="border-2 border-navy bg-paper px-5 py-3 text-sm font-bold tracking-widest uppercase text-navy transition-colors hover:border-stamp hover:text-stamp"
              >
                Hackathon Product
              </Link>
              <DownloadCvButton variant="solid" />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute -top-4 right-2 z-10">
              <Stamp className="text-xs sm:text-sm">
                In production since Dec 2023
              </Stamp>
            </div>
            <p className="mb-2 text-center text-xs font-bold tracking-[0.3em] uppercase text-navy">
              Live Capture
            </p>
            <Viewfinder className="bg-paper p-2 shadow-[0_10px_30px_rgba(23,69,122,0.15)]">
              <img
                src={BEACH_PHOTO}
                alt="Rafi Imam at the beach"
                className="block aspect-[4/5] w-full object-cover"
                loading="eager"
              />
            </Viewfinder>
            <div className="mt-4 text-center">
              <Pill tone="pass">Genuine user — Passed ✓</Pill>
            </div>
          </div>
        </div>

        {/* Depth at first look */}
        <div className="mt-12 grid grid-cols-2 border-2 border-navy bg-paper lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-5 py-5 ${i > 0 ? "border-l border-navy/20" : ""} ${
                i >= 2 ? "border-t border-navy/20 lg:border-t-0" : ""
              } ${i === 2 ? "border-l-0 lg:border-l" : ""}`}
            >
              <p className="font-display text-4xl sm:text-5xl font-semibold text-navy">
                {s.value}
              </p>
              <p className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wide text-ink/65">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Step 1 + Step 2 ---------- */}
      <section className="mt-16">
        <SectionHeading
          step="Steps 1–2"
          title="Document & Liveness"
          sub="He builds this exact check for a living — document verification and face liveness for digital onboarding. Here it is, run on himself."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Document */}
          <div className="border-2 border-navy bg-paper p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-navy-deep">
                Step 1 · Document Check
              </h3>
              <Pill tone="pass">Authentic ✓</Pill>
            </div>
            <div className="mt-4 border border-navy/30 bg-cream p-4">
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-navy/70">
                Portfolio ID
              </p>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 font-bold uppercase text-navy-deep">Name</dt>
                  <dd>MD. Rafi Imam</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 font-bold uppercase text-navy-deep">Role</dt>
                  <dd>Software Development Officer — AI &amp; Automation</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 font-bold uppercase text-navy-deep">Base</dt>
                  <dd>Dhaka, Bangladesh</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 font-bold uppercase text-navy-deep">Education</dt>
                  <dd>B.Sc. Electrical &amp; Computer Engineering, RUET, 2023</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 font-bold uppercase text-navy-deep">Issued</dt>
                  <dd>Dec 2023 — production systems, banking</dd>
                </div>
              </dl>
              <p className="mt-4 border-t border-dashed border-navy/30 pt-2 text-[11px] text-ink/55">
                Portfolio ID — a design concept, not a government document.
              </p>
            </div>
            <div className="mt-4 space-y-1.5 text-sm text-ink/75">
              <p>✓ Production experience — around 3 years</p>
              <p>✓ 30+ containerised services in production</p>
              <p>✓ Systems: payments, core banking, eKYC</p>
            </div>
          </div>

          {/* Liveness */}
          <div className="border-2 border-navy bg-paper p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-navy-deep">
                Step 2 · Liveness Check
              </h3>
              <Pill tone="pass">Live subject confirmed ✓</Pill>
            </div>
            <Viewfinder className="mt-4 px-4 py-2">
              <LivenessRow label="Replay attack" result="Rejected ✓" tone="reject" note="(0 of 33 passed)" />
              <LivenessRow label="Screen / print attack" result="Rejected ✓" tone="reject" />
              <LivenessRow label="Genuine user" result="Passed ✓" tone="pass" />
            </Viewfinder>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-navy-soft px-4 py-3">
                <p className="text-[11px] font-bold tracking-widest uppercase text-navy">False accept rate</p>
                <p className="font-display text-3xl font-semibold text-navy-deep">0.00%</p>
              </div>
              <div className="bg-navy-soft px-4 py-3">
                <p className="text-[11px] font-bold tracking-widest uppercase text-navy">Latency</p>
                <p className="font-display text-3xl font-semibold text-navy-deep">5,000 → ~800 ms</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              ArcFace face match, Swin-B spatial PAD and 3D ResNet-18 temporal
              liveness — PyTorch CUDA inference (FastAPI) behind an asyncio
              gateway, on a production eKYC system.{" "}
              <Link to="/project/2" className="font-bold text-navy underline decoration-stamp decoration-2 underline-offset-2 hover:text-stamp">
                See the full check →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Banking systems map ---------- */}
      <section className="mt-16">
        <SectionHeading
          step="Step 3 · Proof of Work"
          title="Banking Systems Map"
          sub="Eighteen production banking systems, grouped the way they sit in the bank. Every one links to its detail page and its GitHub repository."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {mapGroups.map((group) => (
            <div key={group.title} className="border-2 border-navy bg-paper">
              <h3 className="bg-navy px-4 py-2.5 font-display text-base font-semibold uppercase tracking-wider text-cream">
                {group.title}
              </h3>
              <ul className="divide-y divide-navy/10">
                {group.ids.map((id) => {
                  const p = byId(id);
                  return (
                    <li key={id}>
                      <Link
                        to={`/project/${p.id}`}
                        className="group block px-4 py-3 transition-colors hover:bg-cream"
                      >
                        <span className="flex items-center justify-between gap-2">
                          <span className="text-sm font-bold text-navy-deep group-hover:text-stamp">
                            {p.title}
                          </span>
                          <Pill tone="pass">Pass</Pill>
                        </span>
                        {p.githubRepo && (
                          <span className="mt-0.5 block truncate text-xs text-ink/55">
                            {repoShort(p.githubRepo)}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm">
          <Link to="/projects" className="font-bold text-navy underline decoration-stamp decoration-2 underline-offset-4 hover:text-stamp">
            Open the full proof-of-work index — all {projects.length} projects, banking and earlier →
          </Link>
        </p>
      </section>

      {/* ---------- Hackathon teaser ---------- */}
      <section className="guilloche-band mt-16 px-5 py-8 sm:px-8">
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-cream/80">
          Selected Participant — Meta Global AI Developer Hackathon 2026
        </p>
        <div className="mt-3 flex flex-wrap items-end gap-x-8 gap-y-4">
          <h2 className="font-display max-w-xl text-3xl sm:text-4xl font-semibold uppercase leading-tight text-cream">
            DocTrust — 1 solo project among 5,367 submissions
          </h2>
          <Link
            to="/hackathon"
            className="bg-cream px-5 py-3 text-sm font-bold tracking-widest uppercase text-navy-deep transition-colors hover:bg-white"
          >
            View the hackathon page →
          </Link>
        </div>
        <p className="mt-3 max-w-2xl text-sm text-cream/85">
          Selected as 1 of 20,000 participants worldwide. An AI reviewer agent
          that cross-examines documents and reports evidence gaps instead of
          auto-rejecting — built solo in two weeks, Indie Developer Track.
        </p>
      </section>

      {/* ---------- Decision ---------- */}
      <section className="mt-16 border-2 border-navy bg-paper px-5 py-8 sm:px-8">
        <SectionHeading
          step="Step 4 · Decision"
          title="Verification Complete"
        />
        <div className="flex flex-wrap items-center gap-x-10 gap-y-8">
          <Stamp className="text-3xl sm:text-4xl">Verified — Hireable</Stamp>
          <div className="min-w-[240px] flex-1">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-navy">
              Stack detected
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {stack.map((s) => (
                <li
                  key={s}
                  className="border border-navy/40 bg-cream px-2.5 py-1 text-xs font-semibold text-navy-deep"
                >
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-ink/70">
              The next step is a conversation:{" "}
              <a href="https://github.com/rafiimam" target="_blank" rel="noreferrer" className="font-bold text-navy hover:text-stamp">
                github.com/rafiimam
              </a>{" "}
              ·{" "}
              <a href="https://www.linkedin.com/in/rafiimam/" target="_blank" rel="noreferrer" className="font-bold text-navy hover:text-stamp">
                linkedin.com/in/rafiimam
              </a>
            </p>
            <div className="mt-5">
              <DownloadCvButton variant="outline" />
              <span className="ml-3 text-xs text-ink/55">
                Software engineering CV — includes the Meta Global AI
                Developer Hackathon 2026 entry.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
