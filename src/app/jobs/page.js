import { StoryblokServerComponent } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";
import { getStoryblokApi } from "@/lib/storyblok";

export const dynamic = "force-dynamic";

export default async function JobsPage() {
  const storyblokApi = getStoryblokApi();

  let story;

  try {
    const response = await storyblokApi.get("cdn/stories/jobs/index", {
      version: "published",
    });

    story = response.data.story;
  } catch {
    notFound();
  }

  if (!story) {
    notFound();
  }

  return <StoryblokServerComponent blok={story.content} />;
}