import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import heroImage from "@/assets/hero-dreamcatchers.jpg";
import handImage from "@/assets/ef541db276f467639d9b757ffcff17a4.png"

import { BookingDialog,  ProductCard } from "@/components/storefront";

import { Button } from "@/components/ui/button";

import { crafts, events } from "@/lib/store-data";
import { getProducts, type Product } from "@/lib/products";

import { Reveal, StaggerItem, StaggerReveal } from "@/components/luxury-motion";

export function Hero() { return <section className="mx-auto grid max-w-[1600px] gap-8 px-5 pb-16 pt-12 md:px-10 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[.72fr_1.28fr] lg:grid-rows-[auto_1fr] lg:items-center lg:gap-10 lg:py-20"><Reveal direction="left" className="relative z-10 lg:-mr-56 lg:self-end"><h1 className="font-display text-[clamp(3.65rem,16vw,5rem)] uppercase leading-[.82] lg:text-[clamp(4rem,8.4vw,9rem)]">Born from the<br/>human hand</h1></Reveal><Reveal direction="right" className="w-[82%] justify-self-end lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:w-full"><img src={heroImage} alt="Handwoven dreamcatchers in a sunlit Himalayan studio" width={1600} height={1104} className="aspect-[4/3] w-full object-cover shadow-xl" /></Reveal><Reveal direction="left" delay={0.15} className="lg:col-start-1 lg:row-start-2 lg:self-start"><p className="max-w-[22rem] text-sm leading-7 lg:mt-20 lg:max-w-xl">Everything begins with a pair of hands. With patience, imagination, and a touch of instinct, simple materials become something worth holding. At Let’s Make a Buy, we celebrate the magic of making by hand, the craft, and the stories shaped into every piece.</p><Reveal direction="up" delay={0.2}><Button asChild variant="outline" className="mt-8 h-12 justify-self-end rounded-none border-foreground px-5 font-display text-base font-semibold lg:mt-10 lg:px-6 lg:text-lg"><Link to="/collection">Explore the Collection <ArrowRight /></Link></Button></Reveal></Reveal></section>; }

export function Crafts() {
  return (
    <section className="mx-auto max-w-[1500px] px-5 py-20 md:px-10 md:py-24">
      <SectionTitle>Crafts</SectionTitle>

      <StaggerReveal className="mt-16 grid grid-cols-2 gap-x-3 gap-y-10 md:mt-20 md:gap-10 lg:grid-cols-4">
        {crafts.map((craft, index) => (
          <StaggerItem
            key={craft.name}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <article className="text-left md:text-center">
            <div className="mx-auto h-[145px] w-[145px] overflow-hidden md:h-[255px] md:w-[255px]">
              <img
                src={craft.image}
                alt={craft.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

              <h3 className="mt-3 font-display text-2xl uppercase leading-none md:mt-5 md:text-4xl">
                {craft.name}
              </h3>

              <p className="mt-2 max-w-52 text-xs leading-5 md:mx-auto md:text-sm">
                {craft.note}
              </p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </section>
  );
}

export function HandStory() {
  return (
    <section className="h-[724px] px-5 py-20 md:h-auto md:px-10 md:py-24">
      <div className="mx-auto max-w-[1500px]">
        <SectionTitle showLine={false}>The Hand</SectionTitle>

        <div className="relative mt-16 grid grid-cols-4 items-start md:mt-[45px] md:grid-cols-[256px_256px_256px_256px] md:justify-between">
          {/* Column 1 — Quote */}
          <Reveal direction="left" className="self-center">
            <blockquote className="quote-color font-display text-[12px] font-medium leading-[1.2] md:text-[40px]">
              “Have nothing in your houses that you do not know to be useful,
              or believe to be beautiful.”
              <footer className="mt-3 text-[10px] font-normal md:mt-8 md:text-[30px]">
                — William Morris
              </footer>
            </blockquote>
          </Reveal>


          {/* Column 2 — Paragraph 1 */}
          <Reveal direction="right">
            <p className="text-[10px] font-normal leading-[1.2] md:text-[19px] md:leading-6">
              There is something quietly extraordinary about the human hand. It
              takes what is simple and gives it shape, takes what is ordinary
              and gives it meaning. Clay becomes a vessel, thread becomes form,
              wood becomes an object, and the smallest details begin to carry
              something of the person who made them. Let’s Make a Buy exists
              for that very reason — to celebrate the things that cannot be
              rushed, replicated, or separated from the hands that bring them
              to life. We bring together crafts shaped by different materials,
              traditions, places, and people, each with its own rhythm,
              character, and story.
            </p>
          </Reveal>

          {/* Column 3 — Paragraph 2 */}
          <Reveal direction="right" delay={0.15}>
            <p className="text-[10px] font-normal leading-[1.2] md:text-[19px] md:leading-6">
              We believe a handmade object is more than something to own. It is
              time made visible — patience, skill, imagination, and countless
              small decisions held together in one piece. From pottery and
              jewellery to woven, crocheted, carved, and crafted works, we seek
              out pieces that carry the spirit of their making. In a world
              where almost everything can be made instantly, there is still
              something special about what takes a pair of hands, a little
              patience, and the courage to make something from nothing. This is
              what we believe in. This is what we look for. This is why we make
              a buy.
            </p>
          </Reveal>

          {/* Column 4 — Image */}
          <Reveal direction="right" className="self-center mx-auto w-full">
            <img
              src={handImage}
              alt="Handmade craft"
              className="h-auto w-full object-contain"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}


export function EventsList({ full = false }: { full?: boolean }) {
  return (
    <section className="mx-auto max-w-[1450px] px-5 py-20 md:px-[120px] md:py-24">
      <SectionTitle>Events &amp; Sessions</SectionTitle>

      <div className="mt-20 space-y-24 md:mt-24 md:space-y-32">
        {events.map((event, index) => (
          <Reveal
            key={event.id}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <article className="grid grid-cols-2 items-center gap-5 md:gap-[60px]">
              <img
                src={event.image}
                alt={event.title}
                className={`h-auto w-full object-cover md:h-[281px] md:w-[281px] ${
                  index % 2 ? "order-2 md:justify-self-end" : ""
                }`}
                loading="lazy"
              />

              <div className="min-w-0 max-w-xl justify-self-center text-center">
                <p className="font-['Modern_Sans'] text-[10px] text-primary md:text-[16px]">
                  October {17 + index} — {18 + index}
                </p>

                <h3 className="mt-3 font-display text-2xl uppercase leading-[.95] md:mt-5 md:text-[37px]">
                  {event.title}
                </h3>

                <p className="mt-4 text-[5px] font-light leading-5 text-[#666666] md:mt-8 md:text-[11px] md:leading-6">
                  {event.description}
                </p>

                <Reveal direction="up" className="mt-4 md:mt-8">
                  <BookingDialog eventId={event.id}>
                    <span className="font-display text-[10px] font-medium">
                      {full ? "RESERVE YOUR SEAT" : "VIEW SESSION"}
                    </span>
                    <ArrowRight />
                  </BookingDialog>
                </Reveal>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal
        direction="up"
        className="mt-16 text-center md:mt-20"
      >
        <Button asChild className="h-14 rounded-none px-10">
          <Link to="/events">
            VIEW ALL PROGRAMS
            <ArrowRight />
          </Link>
        </Button>
      </Reveal>
    </section>
  );
}



export function CollectionPreview() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((error) => {
        console.error("SUPABASE PRODUCTS ERROR:", error);
      });
  }, []);

  return (
    <section className="py-20 md:py-24">
      <div className="px-5 md:px-10">
        <SectionTitle>Explore the Collection</SectionTitle>
      </div>

      <StaggerReveal className="no-scrollbar mt-16 flex gap-4 overflow-x-auto pb-6 md:mt-20 md:gap-6">
  <div className="w-8 shrink-0 md:w-16" />

  {products.map((product) => (
    <StaggerItem
      key={product.id}
      className="w-[58vw] shrink-0 sm:w-80"
    >
      <ProductCard product={product} />
    </StaggerItem>
  ))}

  <div className="w-8 shrink-0 md:w-16" />
</StaggerReveal>

      <Reveal direction="up" className="mt-12 text-center md:mt-14">
        <Button asChild className="h-14 rounded-none px-10">
          <Link to="/collection">
            VIEW ALL PRODUCTS
            <ArrowRight />
          </Link>
        </Button>
      </Reveal>
    </section>
  );
}
export function SectionTitle({
  children,
  showLine = true,
}: {
  children: React.ReactNode;
  showLine?: boolean;
}) {
  return (
    <Reveal direction="left" className="text-center">
      <h2 className="font-display text-[clamp(2.8rem,12vw,4rem)] uppercase leading-none md:text-[clamp(3.5rem,7vw,7rem)]">
        {children}
      </h2>

      {showLine && (
        <span className="mx-auto mt-6 block h-20 w-px bg-primary md:h-24" />
      )}
    </Reveal>
  );
}