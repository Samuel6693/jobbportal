import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-slate-950">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-700 text-sm font-bold text-white">
            JP
          </span>
          <span className="text-lg font-bold">Jobbportal</span>
        </Link>

        <nav className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <Link
            href="/"
            className="rounded-md px-3 py-2 transition hover:bg-slate-100 hover:text-slate-950"
          >
            Start
          </Link>
          <Link
            href="/jobs"
            className="rounded-md px-3 py-2 transition hover:bg-slate-100 hover:text-slate-950"
          >
            Lediga jobb
          </Link>
        </nav>
      </div>
    </header>
  );
}