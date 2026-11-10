import { Link, NavLink } from "react-router-dom";
import DownloadCvButton from "./DownloadCvButton";

const linkCls = ({ isActive }: { isActive: boolean }) =>
  `text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors ${
    isActive ? "text-stamp" : "text-navy-deep hover:text-stamp"
  }`;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-navy bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center bg-navy font-display text-lg font-bold text-cream">
            ✓
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold tracking-wide text-navy-deep uppercase">
              MD. Rafi Imam
            </span>
            <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-ink/60">
              Verify this engineer
            </span>
          </span>
        </Link>

        <nav className="ml-auto flex flex-wrap items-center gap-x-4 gap-y-1 sm:gap-x-5">
          <NavLink to="/" end className={linkCls}>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkCls}>
            Projects
          </NavLink>
          <NavLink to="/hackathon" className={linkCls}>
            Hackathon
          </NavLink>
          <span className="hidden md:inline text-navy/30" aria-hidden>
            |
          </span>
          <a
            href="https://github.com/rafiimam"
            target="_blank"
            rel="noreferrer"
            className="text-xs sm:text-sm font-bold tracking-widest uppercase text-navy-deep hover:text-stamp"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rafiimam/"
            target="_blank"
            rel="noreferrer"
            className="text-xs sm:text-sm font-bold tracking-widest uppercase text-navy-deep hover:text-stamp"
          >
            LinkedIn
          </a>
          <DownloadCvButton variant="header" />
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t-2 border-navy bg-paper">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 px-4 py-6 sm:px-6">
        <span className="stamp text-sm">Verified — Hireable</span>
        <p className="text-xs text-ink/60">
          MD. Rafi Imam · Software Development Officer, AI &amp; Automation ·
          Dhaka, Bangladesh
        </p>
        <span className="ml-auto flex gap-4">
          <a
            href="https://github.com/rafiimam"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold tracking-widest uppercase text-navy hover:text-stamp"
          >
            github.com/rafiimam
          </a>
          <a
            href="https://www.linkedin.com/in/rafiimam/"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold tracking-widest uppercase text-navy hover:text-stamp"
          >
            linkedin.com/in/rafiimam
          </a>
        </span>
      </div>
    </footer>
  );
}
