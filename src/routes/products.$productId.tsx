import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Minus, Plus } from "lucide-react";
import { useState } from "react";

import { ProductCard, useStore } from "@/components/storefront";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/luxury-motion";
import { getProductById } from "@/lib/products";

export const Route = createFileRoute("/products/$productId")({
  loader: async ({ params }) => {
    const product = await getProductById(params.productId);

    if (!product) {
      throw notFound();
    }

    return product;
  },

  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.name} — Let’s Make a Buy`
      : "Product unavailable — Let’s Make a Buy";

    const description = loaderData
      ? `${loaderData.category}, handmade in the Himalayas. Shop ${loaderData.name} for ₹${loaderData.price}.`
      : "This handmade product is unavailable.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },

  component: ProductPage,
});

function ProductPage() {
  const product = Route.useLoaderData();
  const { add } = useStore();

  const [quantity, setQuantity] = useState(1);
  const [view, setView] = useState(0);

  const gallery = product.images;
  const selectedImage = gallery[view]?.image_url;

  return (
    <main>
      <div className="mx-auto max-w-[1500px] px-3 py-8 md:px-10 md:py-16">
        <Reveal direction="left">
          <Link
            to="/collection"
            className="mb-6 inline-flex items-center gap-2 text-xs md:mb-8 md:text-sm"
          >
            <ArrowLeft className="size-4" />
            Collection
          </Link>
        </Reveal>

        <div className="grid grid-cols-2 items-start gap-3 lg:grid-cols-[.82fr_1.18fr] lg:gap-12">
          {/* Product images */}
          <Reveal direction="left">
            <div>
              <div className="crop-image aspect-square">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-secondary" />
                )}
              </div>

              {gallery.length > 0 && (
                <Reveal direction="up">
                  <div className="mt-2 grid grid-cols-4 gap-1.5 md:mt-4 md:gap-3">
                    {gallery.map((image, index) => (
                      <button
                        key={image.id}
                        onClick={() => setView(index)}
                        aria-label={`View image ${index + 1}`}
                        className={`border ${
                          view === index
                            ? "border-primary"
                            : "border-transparent"
                        }`}
                      >
                        <div className="aspect-square">
                          <img
                            src={image.image_url}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>
          </Reveal>

          {/* Product information */}
          <Reveal
            direction="right"
            className="min-w-0 self-center lg:pl-8"
          >
            <div>
              <h1 className="font-display text-[2rem] leading-[.9] md:text-[clamp(4rem,8vw,8rem)] md:leading-[.84]">
                {product.name}
              </h1>

              <p className="mt-2 text-sm md:mt-4 md:text-2xl">
                {product.category}
              </p>

              <div className="mt-3 md:mt-7">
                <p className="text-xl font-semibold md:text-3xl">
                  ₹{product.price}
                </p>

                <span className="text-[10px] text-muted-foreground md:text-sm">
                  {product.stock > 0 ? "In stock" : "Out of stock"}
                </span>
              </div>

              {/* Quantity */}
              <div className="mt-3 inline-flex h-9 items-center rounded-full bg-secondary md:mt-6 md:h-auto">
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 md:size-9"
                  onClick={() =>
                    setQuantity(Math.max(1, quantity - 1))
                  }
                >
                  <Minus />
                </Button>

                <span className="w-7 text-center text-sm md:w-10 md:text-base">
                  {quantity}
                </span>

                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 md:size-9"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus />
                </Button>
              </div>

              {/* Actions */}
              <Reveal direction="up">
                <div className="mt-3 grid gap-2 md:mt-6 md:gap-3">
                  <Button
                    className="h-10 rounded-none px-2 text-xs md:h-13 md:text-sm"
                    disabled={product.stock <= 0}
                    onClick={() => add(product, quantity)}
                  >
                    Buy Now
                    <ArrowRight />
                  </Button>

                  <Button
                    variant="outline"
                    className="h-10 rounded-none border-foreground px-2 text-xs md:h-13 md:text-sm"
                    disabled={product.stock <= 0}
                    onClick={() => add(product, quantity)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Reveal>

              {/* Description - desktop */}
              <div className="mt-8 hidden space-y-5 text-sm leading-6 md:block">
                <p>
                  {product.description ||
                    "A handmade piece created with care in the Himalayas."}
                </p>

                <p>
                  Made slowly in small batches, natural variations in
                  color and finish are part of the piece’s character.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Description - mobile */}
        <Reveal
          direction="up"
          className="mx-auto mt-10 max-w-xl space-y-4 text-center text-sm leading-relaxed md:hidden"
        >
          <p>
            {product.description ||
              "A handmade piece created with care in the Himalayas."}
          </p>

          <p>
            Made slowly in small batches, natural variations in color
            and finish are part of the piece’s character.
          </p>
        </Reveal>

        {/* Recommendations */}
        <section className="py-20 md:py-28">
          <Reveal
            direction="left"
            className="flex items-end justify-between gap-6"
          >
            <h2 className="font-display text-4xl md:text-7xl">
              You might also like
            </h2>

            <div className="hidden gap-2 sm:flex">
              <Button variant="ghost" size="icon">
                <ArrowLeft />
              </Button>

              <Button variant="ghost" size="icon">
                <ArrowRight />
              </Button>
            </div>
          </Reveal>

          <Reveal
            direction="up"
            className="mt-10 text-center text-sm text-muted-foreground md:mt-12"
          >
            <p>
              Explore more handmade pieces from the collection.
            </p>
          </Reveal>

          <Reveal direction="up" className="mt-14 text-center">
            <Button
              asChild
              variant="secondary"
              className="h-12 rounded-none px-10"
            >
              <Link to="/collection">
                More Products
                <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </section>
      </div>
    </main>
  );
}