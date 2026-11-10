import { Link } from "react-router-dom";
import { projects, Project } from "../data";
import { Pill, ProgressTracker, SectionHeading, repoShort } from "../components/verify";

function ProjectRow({ p, index }: { p: Project; index: number }) {
  return (
    <article className="grid gap-0 border-2 border-navy bg-paper sm:grid-cols-[220px_1fr]">
      <Link to={`/project/${p.id}`} className="block overflow-hidden bg-navy-soft">
        <img
          src={p.img}
          alt={p.title}
          className="h-44 w-full object-cover transition-transform duration-300 hover:scale-[1.03] sm:h-full"
          loading="lazy"
        />
      </Link>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-display text-sm font-semibold text-ink/40">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-navy-deep">
            <Link to={`/project/${p.id}`} className="hover:text-stamp">
              {p.title}
            </Link>
          </h3>
          <span className="ml-auto">
            <Pill tone={p.category === "banking" ? "pass" : "neutral"}>
              {p.category === "banking" ? "Production · Pass" : "Earlier build"}
            </Pill>
          </span>
        </div>
        <p className="mt-1 text-xs font-bold tracking-widest uppercase text-stamp">
          {p.technology}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink/75">{p.summary}</p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold tracking-widest uppercase">
          <Link to={`/project/${p.id}`} className="text-navy underline decoration-stamp decoration-2 underline-offset-4 hover:text-stamp">
            View check →
          </Link>
          {p.githubRepo && (
            <a href={p.githubRepo} target="_blank" rel="noreferrer" className="text-navy hover:text-stamp">
              {repoShort(p.githubRepo)}
            </a>
          )}
          {p.liveLink && (
            <a href={p.liveLink} target="_blank" rel="noreferrer" className="text-navy hover:text-stamp">
              Live ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const banking = projects.filter((p) => p.category === "banking");
  const earlier = projects.filter((p) => p.category === "earlier");
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 pt-6">
      <ProgressTracker active={3} />
      <div className="mt-10">
        <SectionHeading
          step="Step 3 · Proof of Work"
          title="All Systems Checked"
          sub={`${banking.length} production banking systems first, then the earlier builds they grew from. Every entry carries its visual, its stack, and its repository.`}
        />
      </div>

      <h3 className="font-display mb-4 mt-4 text-2xl font-semibold uppercase tracking-wide text-navy-deep">
        Banking — Production
      </h3>
      <div className="space-y-5">
        {banking.map((p, i) => (
          <ProjectRow key={p.id} p={p} index={i} />
        ))}
      </div>

      <h3 className="font-display mb-4 mt-12 text-2xl font-semibold uppercase tracking-wide text-navy-deep">
        Earlier Builds
      </h3>
      <div className="space-y-5">
        {earlier.map((p, i) => (
          <ProjectRow key={p.id} p={p} index={i} />
        ))}
      </div>
    </div>
  );
}
