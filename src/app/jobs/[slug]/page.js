import { renderRichText } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import { notFound } from "next/navigation";

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
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{job.department}</p>
            <h1 className="mt-3 text-4xl font-bold text-slate-950">{job.title}</h1>
            <p className="mt-4 text-lg leading-8 text-slate-700">{job.summary}</p>
            <p className="mt-6 text-slate-600">{job.location}</p>
            <article
                className="mt-10 space-y-5 leading-8 text-slate-800"
                dangerouslySetInnerHTML={{
                    __html: renderRichText(job.content),
                }}
            />

        </main>
    )
}