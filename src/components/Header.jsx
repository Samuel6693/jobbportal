import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-slate-950">
          Jobbportal
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
          <Link href="/" className="hover:text-slate-950">
            Start
          </Link>
          <Link href="/jobs" className="hover:text-slate-950">
            Lediga jobb
          </Link>
        </nav>
      </div>
    </header>
  );
}