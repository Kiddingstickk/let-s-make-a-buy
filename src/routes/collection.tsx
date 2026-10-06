import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { ProductCard } from "@/components/storefront";
import {
  Reveal,
  StaggerItem,
  StaggerReveal,
} from "@/components/luxury-motion";
import { getProducts, type Product } from "@/lib/products";

export const Route = createFileRoute("/collection")({
  loader: () => getProducts(),

  head: () => ({
    meta: [
      {
        title: "Handmade Collection — Let’s Make a Buy",
      },
      {
        name: "description",
        content:
          "Shop jewellery and objects handmade by artisans in the Himalayan mountains.",
      },
      {
        property: "og:title",
        content: "Handmade Collection — Let’s Make a Buy",
      },
      {
        property: "og:description",
        content:
          "Shop jewellery and objects handmade by artisans in the Himalayan mountains.",
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

  component: CollectionPage,
});

function CollectionPage() {
  const products = Route.useLoaderData();

  return (
    <main className="mx-auto max-w-[1500px] overflow-hidden px-5 py-16 md:px-10 md:py-28">
      <div className="grid items-end gap-8 md:grid-cols-2">
        <Reveal direction="left">
          <h1 className="font-display text-[clamp(3.4rem,14vw,4.2rem)] uppercase leading-[.8] md:text-[clamp(5rem,11vw,11rem)]">
            The
            <br />
            Collection
          </h1>
        </Reveal>

        <Reveal direction="right">
          <p className="max-w-lg pb-3 text-sm text-muted-foreground md:text-base">
            Small-batch pieces shaped by mountain materials, inherited
            techniques, and a playful eye for color.
          </p>
        </Reveal>
      </div>

      <StaggerReveal className="mt-14 grid grid-cols-2 gap-x-3 gap-y-12 md:mt-20 md:gap-x-7 md:gap-y-16 lg:grid-cols-4">
        {products.map((product) => (
          <StaggerItem key={product.id}>
            <ProductCard product={product} />
          </StaggerItem>
        ))}
      </StaggerReveal>
    </main>
  );
}