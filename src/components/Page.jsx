import { StoryblokServerComponent, setComponents } from "@storyblok/react/rsc";
import JobList from "@/components/JobList";

setComponents({
  "job-list": JobList,
});

export default function Page({ blok }) {
  return (
    <main>
      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}