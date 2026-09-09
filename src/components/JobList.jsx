import Link from "next/link";
import { getStoryblokApi } from "@/lib/storyblok";

export default async function JobList() {
  const storyblokApi = getStoryblokApi();

  const response = await storyblokApi.get("cdn/stories", {
    version: "published",
    starts_with: "jobs/",
    content_type: "job-post",
  });

  const jobs = response.data.stories;

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Lediga jobb
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
            Hitta ditt nästa jobb
          </h1>
        </div>

        <p className="max-w-sm text-sm leading-6 text-slate-600">
          Alla annonser hämtas från Storyblok och uppdateras genom CMS:et.
        </p>
      </div>

      <div className="grid gap-5">
        {jobs.map((job) => (
          <article
            key={job.uuid}
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  {job.content.department}
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-950">
                  {job.content.title}
                </h2>
              </div>

              <p className="rounded-md bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                {job.content.location}
              </p>
            </div>

            <p className="mt-4 max-w-3xl leading-7 text-slate-700">
              {job.content.summary}
            </p>

            <Link
              href={`/jobs/${job.slug}`}
              className="mt-6 inline-flex rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:border-emerald-700 hover:text-emerald-700"
            >
              Läs mer
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}