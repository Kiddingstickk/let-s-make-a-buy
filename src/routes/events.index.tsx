import { createFileRoute } from "@tanstack/react-router";
import { EventsList } from "@/components/home-sections";

export const Route = createFileRoute("/events/")({
  component: EventsPage,
});

function EventsPage() {
  return (
    <main>
      <EventsList full />
    </main>
  );
}