import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as Minus, d as ArrowLeft, i as Plus, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as Reveal, n as Button, p as useStore } from "./storefront-SqhskZUa.mjs";
import { t as Route } from "./products._productId-DI7DVJV-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._productId-BXRCVG1o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const product = Route.useLoaderData();
	const { add } = useStore();
	const [quantity, setQuantity] = (0, import_react.useState)(1);
	const [view, setView] = (0, import_react.useState)(0);
	const gallery = product.images;
	const selectedImage = gallery[view]?.image_url;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1500px] px-3 py-8 md:px-10 md:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				direction: "left",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/collection",
					className: "mb-6 inline-flex items-center gap-2 text-xs md:mb-8 md:text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Collection"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 items-start gap-3 lg:grid-cols-[.82fr_1.18fr] lg:gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					direction: "left",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "crop-image aspect-square",
						children: selectedImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: selectedImage,
							alt: product.name,
							className: "h-full w-full object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-secondary" })
					}), gallery.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						direction: "up",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 grid grid-cols-4 gap-1.5 md:mt-4 md:gap-3",
							children: gallery.map((image, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setView(index),
								"aria-label": `View image ${index + 1}`,
								className: `border ${view === index ? "border-primary" : "border-transparent"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-square",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: image.image_url,
										alt: "",
										className: "h-full w-full object-cover"
									})
								})
							}, image.id))
						})
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					direction: "right",
					className: "min-w-0 self-center lg:pl-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-[2rem] leading-[.9] md:text-[clamp(4rem,8vw,8rem)] md:leading-[.84]",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm md:mt-4 md:text-2xl",
							children: product.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 md:mt-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xl font-semibold md:text-3xl",
								children: ["₹", product.price]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-muted-foreground md:text-sm",
								children: product.stock > 0 ? "In stock" : "Out of stock"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 inline-flex h-9 items-center rounded-full bg-secondary md:mt-6 md:h-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									className: "size-8 md:size-9",
									onClick: () => setQuantity(Math.max(1, quantity - 1)),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-7 text-center text-sm md:w-10 md:text-base",
									children: quantity
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									className: "size-8 md:size-9",
									onClick: () => setQuantity(quantity + 1),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							direction: "up",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 grid gap-2 md:mt-6 md:gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									className: "h-10 rounded-none px-2 text-xs md:h-13 md:text-sm",
									disabled: product.stock <= 0,
									onClick: () => add(product, quantity),
									children: ["Buy Now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									className: "h-10 rounded-none border-foreground px-2 text-xs md:h-13 md:text-sm",
									disabled: product.stock <= 0,
									onClick: () => add(product, quantity),
									children: "Add to Cart"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 hidden space-y-5 text-sm leading-6 md:block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: product.description || "A handmade piece created with care in the Himalayas." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Made slowly in small batches, natural variations in color and finish are part of the piece’s character." })]
						})
					] })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				direction: "up",
				className: "mx-auto mt-10 max-w-xl space-y-4 text-center text-sm leading-relaxed md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: product.description || "A handmade piece created with care in the Himalayas." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Made slowly in small batches, natural variations in color and finish are part of the piece’s character." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "py-20 md:py-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						direction: "left",
						className: "flex items-end justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl md:text-7xl",
							children: "You might also like"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden gap-2 sm:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						direction: "up",
						className: "mt-10 text-center text-sm text-muted-foreground md:mt-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Explore more handmade pieces from the collection." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						direction: "up",
						className: "mt-14 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "secondary",
							className: "h-12 rounded-none px-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/collection",
								children: ["More Products", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						})
					})
				]
			})
		]
	}) });
}
//#endregion
export { ProductPage as component };
