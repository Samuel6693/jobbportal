import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-137px)] max-w-5xl flex-col justify-center px-6 py-16">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-700">
          CMS examination
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-slate-950">
          Hitta nästa möjlighet i vår jobbportal
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
          Välkommen till vår jobbportal! Här kan du utforska spännande karriärmöjligheter och hitta ditt nästa drömjobb. Vi erbjuder en mängd olika tjänster och branscher, så oavsett om du är nyutexaminerad eller erfaren yrkesperson, finns det något för dig.
        </p>

        <div className="mt-8">
          <Link
            href="/jobs"
            className="inline-flex rounded-md bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            Visa lediga jobb
          </Link>
        </div>
      </div>
    </main>
  );
}