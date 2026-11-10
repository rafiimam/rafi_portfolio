import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data";
import { Pill, Viewfinder, repoShort } from "../components/verify";

const LIVENESS_ID = 2;

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const tech = project.technology.split(",").map((t) => t.trim()).filter(Boolean);
  const isLiveness = project.id === LIVENESS_ID;

  const bullets: string[] = [
    project.summary,
    `Built with ${project.technology}.`,
    project.category === "banking"
      ? "Production banking system — the linked repository is its public sample."
      : "Earlier build — kept public as a working sample.",
  ];
  if (isLiveness) {
    bullets.push(
      "Stack in production: ArcFace face match, Swin-B spatial PAD, 3D ResNet-18 temporal liveness, PyTorch CUDA + FastAPI behind an asyncio gateway."
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 pt-6">
      <Link
        to="/projects"
        className="text-xs font-bold tracking-widest uppercase text-navy hover:text-stamp"
      >
        ← Back to proof of work
      </Link>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <h1 className="font-display text-4xl sm:text-5xl font-semibold uppercase tracking-wide text-navy-deep">
          {project.title}
        </h1>
        <Pill tone={project.category === "banking" ? "pass" : "neutral"}>
          {project.category === "banking" ? "Production · Pass ✓" : "Earlier build"}
        </Pill>
      </div>
      <p className="mt-2 text-sm font-bold tracking-widest uppercase text-stamp">
        {project.technology}
      </p>

      <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.2fr_1fr]">
        <Viewfinder className="bg-paper p-2 shadow-[0_10px_30px_rgba(23,69,122,0.15)]">
          <img
            src={project.img}
            alt={project.title}
            className="block w-full object-cover"
          />
        </Viewfinder>

        <div>
          <h2 className="font-display text-xl font-semibold uppercase tracking-wide text-navy-deep">
            What it is
          </h2>
          <ul className="mt-3 space-y-2.5">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink/80">
                <span className="mt-0.5 font-bold text-navy">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="border border-navy/40 bg-paper px-2.5 py-1 text-xs font-semibold text-navy-deep"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.githubRepo && (
              <a
                href={project.githubRepo}
                target="_blank"
                rel="noreferrer"
                className="bg-navy px-5 py-3 text-sm font-bold tracking-widest uppercase text-cream transition-colors hover:bg-navy-deep"
              >
                GitHub · {repoShort(project.githubRepo).replace("github.com/", "")}
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="border-2 border-navy bg-paper px-5 py-3 text-sm font-bold tracking-widest uppercase text-navy transition-colors hover:border-stamp hover:text-stamp"
              >
                Live site ↗
              </a>
            )}
          </div>
        </div>
      </div>

      {isLiveness && (
        <section className="mt-12 border-2 border-navy bg-paper p-5 sm:p-7">
          <h2 className="font-display text-2xl font-semibold uppercase tracking-wide text-navy-deep">
            The check, step by step
          </h2>
          <div className="mt-5 flex flex-wrap items-stretch gap-3">
            {[
              "NID Document",
              "Face Match (ArcFace)",
              "Liveness / PAD (Swin-B + 3D ResNet-18)",
              "Decision",
            ].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-3">
                <span className="border-2 border-navy bg-cream px-4 py-3 text-center font-display text-base font-semibold uppercase tracking-wide text-navy-deep">
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-xl font-bold text-stamp" aria-hidden>
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 max-w-lg">
            <div className="bg-navy-soft px-4 py-3">
              <p className="text-[11px] font-bold tracking-widest uppercase text-navy">
                False accept rate
              </p>
              <p className="font-display text-3xl font-semibold text-navy-deep">0.00%</p>
            </div>
            <div className="bg-navy-soft px-4 py-3">
              <p className="text-[11px] font-bold tracking-widest uppercase text-navy">
                Latency
              </p>
              <p className="font-display text-3xl font-semibold text-navy-deep">&gt;5 s → ~800 ms</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-ink/70">
            Final locked test set, production eKYC: replay attacks rejected
            (0 of 33 passed), genuine users passed.
          </p>
        </section>
      )}
    </div>
  );
}
