import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Globe,
  MapPin,
  Signal,
  User,
  Users,
  CalendarDays,
} from "lucide-react";

import {
  BookingDialog,
  Newsletter,
  ProductCard,
  SiteFooter,
} from "@/components/storefront";

import { SectionTitle } from "@/components/home-sections";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/luxury-motion";

import { getEventById, getEvents } from "@/lib/events";
import { getProducts } from "@/lib/products";

export const Route = createFileRoute("/events/$eventId")({
  loader: async ({ params }) => {
    const [event, allEvents, products] = await Promise.all([
      getEventById(params.eventId),
      getEvents(),
      getProducts(),
    ]);

    if (!event) {
      throw notFound();
    }

    return {
      event,
      allEvents,
      products,
    };
  },

  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          {
            title: "Session not found — Let’s Make a Buy",
          },
          {
            name: "robots",
            content: "noindex",
          },
        ],
      };
    }

    const { event } = loaderData;

    const title = `${event.title} — Craft Session in Parvati Valley`;

    return {
      meta: [
        {
          title,
        },
        {
          name: "description",
          content: event.description ?? "",
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: event.description ?? "",
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
    };
  },

  notFoundComponent: () => (
    <main className="px-5 py-32 text-center">
      <h1 className="font-display text-5xl">Session not found</h1>

      <Button
        asChild
        variant="outline"
        className="mt-8 rounded-none"
      >
        <Link to="/events">See all sessions</Link>
      </Button>
    </main>
  ),

  component: EventDetail,
});

function formatDate(date: string | null, endDate: string | null) {
  if (!date) return "";

  const start = new Date(`${date}T00:00:00`);

  const startFormatted = start.toLocaleDateString("en-IN", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!endDate || endDate === date) {
    return startFormatted;
  }

  const end = new Date(`${endDate}T00:00:00`);

  const endFormatted = end.toLocaleDateString("en-IN", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${startFormatted} — ${endFormatted}`;
}

function formatTime(time: string | null) {
  if (!time) return "";

  const parts = time.split(":");
  const hours = Number(parts[0] ?? 0);
  const minutes = Number(parts[1] ?? 0);

  const date = new Date();
  date.setHours(hours, minutes, 0, 0);

  return date.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function formatTimeRange(
  start: string | null,
  end: string | null
) {
  if (!start) return "";

  const startFormatted = formatTime(start);

  if (!end) {
    return startFormatted;
  }

  return `${startFormatted} – ${formatTime(end)}`;
}

function EventDetail() {
  console.log("🔥 EVENT DETAIL ROUTE LOADED");
  console.log("EVENT:", Route.useLoaderData().event);
  const { event, allEvents, products } = Route.useLoaderData();

  const others = allEvents.filter((e) => e.id !== event.id);

  const dates = formatDate(event.event_date, event.end_date);

  const time = formatTimeRange(
    event.event_time,
    event.end_time
  );

  const facts = [
    {
      icon: User,
      label: "Host",
      value: event.host_name ?? "—",
    },
    {
      icon: Clock,
      label: "Duration",
      value: event.duration ?? "—",
    },
    {
      icon: Users,
      label: "Seats",
      value: `${event.capacity} seats`,
    },
    {
      icon: CalendarDays,
      label: "Dates",
      value: `${dates}${time ? ` · ${time}` : ""}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: event.location ?? "—",
    },
    {
      icon: Signal,
      label: "Level",
      value: event.level ?? "—",
    },
    {
      icon: Globe,
      label: "Language",
      value: event.language ?? "—",
    },
  ];

  return (
    <main className="pb-20 md:pb-0">

      {/* HERO */}
      <section className="mx-auto max-w-[1450px] px-5 pt-10 md:px-10 md:pt-16">

        <Reveal direction="left">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All sessions
          </Link>
        </Reveal>

        <div className="mt-8 grid items-center gap-8 md:mt-12 md:grid-cols-2 md:gap-16">

          <Reveal direction="left">

            <p className="text-sm text-primary">
              {dates}
            </p>

            <h1 className="mt-4 font-display text-[clamp(3rem,13vw,4.5rem)] uppercase leading-[.9] md:text-[clamp(4rem,6.5vw,7rem)]">
              {event.title}
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-muted-foreground md:text-base">
              {event.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">

              <p className="font-display text-4xl">
                ₹{event.price}

                <span className="ml-2 font-sans text-sm text-muted-foreground">
                  per seat
                </span>
              </p>

              <BookingDialog eventId={event.id}>
                <span className="flex items-center gap-2">
                  Reserve your seat
                  <ArrowRight />
                </span>
              </BookingDialog>

            </div>

          </Reveal>

          <Reveal direction="right">

            {event.image_url ? (
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={event.image_url}
                  alt={event.title}
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </div>
            ) : (
              <div className="aspect-[4/5] bg-secondary" />
            )}

          </Reveal>

        </div>
      </section>


      {/* FACTS */}
      <section className="mx-auto mt-16 max-w-[1450px] px-5 md:mt-24 md:px-10">

        <StaggerReveal className="grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4 lg:grid-cols-7">

          {facts.map((f) => (
            <StaggerItem
              key={f.label}
              direction="up"
              className="bg-background p-5"
            >
              <f.icon className="size-4 text-primary" />

              <p className="mt-3 text-[11px] uppercase tracking-widest text-muted-foreground">
                {f.label}
              </p>

              <p className="mt-1 text-sm">
                {f.value}
              </p>
            </StaggerItem>
          ))}

        </StaggerReveal>

      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-[1450px] px-8 py-20 md:grid md:grid-cols-2 md:gap-20 md:px-10 md:py-28">

      {/* ABOUT THE SESSION */}
      <Reveal direction="left">
        <div className="text-left md:max-w-[600px]">
          <h2 className="font-display text-[2.15rem] uppercase leading-[0.92] tracking-[-0.02em] md:text-6xl">
            About the session
          </h2>

          <p className="mt-6 max-w-[320px] text-left text-[13px] leading-[1.55] text-muted-foreground md:max-w-none md:text-base md:leading-7">
            {event.about}
          </p>

          {event.what_you_make && (
            <p className="mt-6 max-w-[320px] border-l-2 border-primary pl-4 text-left text-[13px] leading-[1.55] md:max-w-none md:text-sm md:leading-6">
              <span className="font-semibold">
                What you’ll make —{" "}
              </span>
              {event.what_you_make}
            </p>
          )}
        </div>
      </Reveal>

      {/* HOST SIDE */}
      <div className="relative">

        {/* HOST IMAGE — CENTER */}
        {event.host_image_url && (
          <Reveal
            direction="up"
            className="relative z-10 mx-auto mt-14 h-[160px] w-[160px] md:absolute md:left-[-85px] md:top-[280px] md:mt-0 md:mx-0 md:h-[240px] md:w-[180px]"
          >
            <img
              src={event.host_image_url}
              alt={`${event.host_name ?? "Host"} working during the session`}
              className="h-full w-full object-cover"
            />
          </Reveal>
        )}

        {/* YOUR HOST — RIGHT */}
        <Reveal
          direction="right"
          className="ml-auto mt-14 w-[90%] bg-secondary px-6 py-7 text-right md:ml-0 md:mt-[600px] md:w-full md:p-10 md:text-left"
        >
          <p className="text-[10px] uppercase tracking-widest text-primary md:text-xs">
            Your host
          </p>

          <h3 className="mt-3 font-display text-[2.1rem] leading-[0.92] md:text-5xl">
            {event.host_name}
          </h3>

          <p className="mt-2 text-[12px] text-muted-foreground md:text-sm">
            {event.host_craft}
          </p>

          <p className="mt-5 ml-auto max-w-[280px] text-[13px] leading-[1.55] md:ml-0 md:max-w-none md:text-sm md:leading-7">
            {event.host_bio}
          </p>
        </Reveal>

      </div>
      </section>


      {/* THE DAY */}
      <section className="border-y border-border px-5 py-20 md:px-10 md:py-28">

        <div className="mx-auto grid max-w-[1450px] gap-14 md:grid-cols-2 md:gap-20">

          <Reveal direction="left">

            <h2 className="font-display text-4xl uppercase md:text-6xl">
              The day
            </h2>

            {event.schedule.length > 0 ? (
              <ol className="mt-8">

                {event.schedule.map((s) => (
                  <li
                    key={s.time + s.title}
                    className="flex gap-6 border-b border-border py-4"
                  >
                    <span className="w-14 shrink-0 font-display text-xl text-primary">
                      {s.time}
                    </span>

                    <span className="text-sm md:text-base">
                      {s.title}
                    </span>
                  </li>
                ))}

              </ol>
            ) : (
              <p className="mt-8 text-sm text-muted-foreground">
                Schedule details will be shared after booking.
              </p>
            )}

          </Reveal>


          <Reveal direction="right">

            <h2 className="font-display text-4xl uppercase md:text-6xl">
              Included
            </h2>

            {event.amenities.length > 0 && (
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">

                {event.amenities.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-3 text-sm"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {a}
                  </li>
                ))}

              </ul>
            )}


            <h3 className="mt-10 font-display text-2xl">
              What to bring
            </h3>

            {event.what_to_bring.length > 0 && (
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">

                {event.what_to_bring.map((b) => (
                  <li key={b}>
                    — {b}
                  </li>
                ))}

              </ul>
            )}


            <p className="mt-8 text-xs leading-5 text-muted-foreground">
              {event.cancellation_policy ??
                "Please check the cancellation policy before booking."}
            </p>


            <Reveal direction="up" className="mt-8">

              <BookingDialog eventId={event.id}>
                <span className="flex items-center gap-2">
                  Book now
                  <ArrowRight />
                </span>
              </BookingDialog>

            </Reveal>

          </Reveal>

        </div>

      </section>


      {/* MORE PROGRAMS */}
      {others.length > 0 && (
        <section className="mx-auto max-w-[1450px] px-5 py-20 md:px-10 md:py-24">

          <SectionTitle>
            More Programs
          </SectionTitle>

          <StaggerReveal className="mt-16 grid grid-cols-2 gap-x-3 gap-y-10 md:mt-20 md:gap-8 lg:grid-cols-3">

            {others.map((o, i) => (
              <StaggerItem
                key={o.id}
                direction={i % 2 === 0 ? "left" : "right"}
              >

                <Link
                  to="/events/$eventId"
                  params={{ eventId: o.id }}
                  className="group block"
                >

                  {o.image_url ? (
                    <div className="aspect-square overflow-hidden md:aspect-[4/3]">
                      <img
                        src={o.image_url}
                        alt={o.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-square bg-secondary md:aspect-[4/3]" />
                  )}

                  <p className="mt-4 text-[10px] text-primary md:text-xs">
                    {formatDate(o.event_date, o.end_date)}
                  </p>

                  <h3 className="mt-2 font-display text-xl uppercase leading-none group-hover:text-primary md:text-3xl">
                    {o.title}
                  </h3>

                  <p className="mt-2 text-xs text-muted-foreground md:text-sm">
                    {o.duration} · ₹{o.price}
                  </p>

                </Link>

              </StaggerItem>
            ))}

          </StaggerReveal>

        </section>
      )}


      {/* COLLECTION */}
      <section className="py-20 md:py-24">

        <div className="px-5 md:px-10">
          <SectionTitle>
            Explore the Collection
          </SectionTitle>
        </div>

        <StaggerReveal className="no-scrollbar mt-16 flex snap-x gap-4 overflow-x-auto px-5 pb-6 md:mt-20 md:gap-6 md:px-10">

          {products.map((p) => (
            <StaggerItem
              key={p.id}
              className="w-[72vw] shrink-0 snap-start sm:w-80"
            >
              <ProductCard product={p} />
            </StaggerItem>
          ))}

        </StaggerReveal>

        <Reveal direction="up" className="mt-12 text-center">

          <Button
            asChild
            className="h-14 rounded-none px-10"
          >
            <Link to="/collection">
              View all products
              <ArrowRight />
            </Link>
          </Button>

        </Reveal>

      </section>


      <Newsletter />

      <SiteFooter />


      {/* MOBILE BOOKING BAR */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between border-t border-border bg-background/95 px-5 py-3 backdrop-blur md:hidden">

        <p className="font-display text-2xl">
          ₹{event.price}

          <span className="ml-1 font-sans text-xs text-muted-foreground">
            / seat
          </span>
        </p>

        <BookingDialog eventId={event.id}>
          <span>Book now</span>
        </BookingDialog>

      </div>

    </main>
  );
}