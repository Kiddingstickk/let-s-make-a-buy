import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteFooter } from "@/components/storefront";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      {
        title: "Workshops & Sessions — Let’s Make a Buy",
      },
      {
        name: "description",
        content:
          "Book intimate craft sessions with makers in Parvati Valley.",
      },
      {
        property: "og:title",
        content: "Workshops & Sessions — Let’s Make a Buy",
      },
      {
        property: "og:description",
        content:
          "Book intimate craft sessions with makers in Parvati Valley.",
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
  component: EventsLayout,
});

function EventsLayout() {
  return (
    <>
      <Outlet />
      <SiteFooter />
    </>
  );
}