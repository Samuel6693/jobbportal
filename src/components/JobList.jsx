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
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Lediga jobb
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-950">
          Hitta ditt nästa jobb
        </h1>
      </div>

      <div className="grid gap-6">
        {jobs.map((job) => (
          <article
            key={job.uuid}
            className="rounded-lg border border-slate-200 bg-white p-6"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {job.content.department}
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              {job.content.title}
            </h2>

            <p className="mt-3 text-slate-700">{job.content.summary}</p>

            <p className="mt-4 text-sm text-slate-600">
              {job.content.location}
            </p>

            <Link
              href={`/jobs/${job.slug}`}
              className="mt-6 inline-block font-semibold text-slate-950 underline"
            >
              Läs mer
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}