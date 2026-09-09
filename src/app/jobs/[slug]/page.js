import { renderRichText } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function JobDetailPage({ params }) {
  const { slug } = await params;
  const storyblokApi = getStoryblokApi();

  let story;

  try {
    const response = await storyblokApi.get(`cdn/stories/jobs/${slug}`, {
      version: "published",
    });

    story = response.data.story;
  } catch {
    notFound();
  }

  if (!story) {
    notFound();
  }

  const job = story.content;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/jobs"
        className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
      >
        Tillbaka till lediga jobb
      </Link>

      <div className="mt-8 border-b border-slate-200 pb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          {job.department}
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
          {job.title}
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-700">{job.summary}</p>

        <p className="mt-6 inline-flex rounded-md bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
          {job.location}
        </p>
      </div>

      <article
        className="job-content mt-10"
        dangerouslySetInnerHTML={{
          __html: renderRichText(job.content),
        }}
      />
    </main>
  );
}