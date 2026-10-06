import { createFileRoute } from "@tanstack/react-router";

import {
  CollectionPreview,
  Crafts,
  EventsList,
  HandStory,
  Hero,
} from "@/components/home-sections";

import { Newsletter, SiteFooter } from "@/components/storefront";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Let’s Make a Buy — Handmade in the Himalayas",
      },
      {
        name: "description",
        content:
          "Artisan-made jewellery, pottery, weaving, crochet, and intimate craft sessions from Parvati Valley.",
      },
      {
        property: "og:title",
        content: "Let’s Make a Buy — Handmade in the Himalayas",
      },
      {
        property: "og:description",
        content:
          "Artisan-made objects and intimate craft sessions from Parvati Valley.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <Crafts />
      <HandStory />
      <EventsList />
      <CollectionPreview />
      <Newsletter />
      <SiteFooter />
    </main>
  );
}