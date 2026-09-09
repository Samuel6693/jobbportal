import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import Page from "@/components/Page";
import JobList from "@/components/JobList";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    "job-list": JobList,
  },
});