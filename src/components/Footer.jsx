export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold">Jobbportal</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">
            En CMS-driven jobbportal byggd med Next.js och Storyblok.
          </p>
        </div>

        <p className="text-sm text-slate-400">
          CMS examinationsuppgift
        </p>
      </div>
    </footer>
  );
}