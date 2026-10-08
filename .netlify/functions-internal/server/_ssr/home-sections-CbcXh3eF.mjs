import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { u as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as Reveal, c as StaggerItem, d as crafts, f as events, i as ProductCard, l as StaggerReveal, n as Button, t as BookingDialog } from "./storefront-SqhskZUa.mjs";
import { n as getProducts } from "./products-BHAQ4fPD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/home-sections-CbcXh3eF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_dreamcatchers_default = "/assets/hero-dreamcatchers-DS5nL1aU.jpg";
var ef541db276f467639d9b757ffcff17a4_default = "/assets/ef541db276f467639d9b757ffcff17a4-D9XfvmIp.png";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-[1600px] gap-8 px-5 pb-16 pt-12 md:px-10 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[.72fr_1.28fr] lg:grid-rows-[auto_1fr] lg:items-center lg:gap-10 lg:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				direction: "left",
				className: "relative z-10 lg:-mr-56 lg:self-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-display text-[clamp(3.65rem,16vw,5rem)] uppercase leading-[.82] lg:text-[clamp(4rem,8.4vw,9rem)]",
					children: [
						"Born from the",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"human hand"
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				direction: "right",
				className: "w-[82%] justify-self-end lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_dreamcatchers_default,
					alt: "Handwoven dreamcatchers in a sunlit Himalayan studio",
					width: 1600,
					height: 1104,
					className: "aspect-[4/3] w-full object-cover shadow-xl"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				direction: "left",
				delay: .15,
				className: "lg:col-start-1 lg:row-start-2 lg:self-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-[22rem] text-sm leading-7 lg:mt-20 lg:max-w-xl",
					children: "Everything begins with a pair of hands. With patience, imagination, and a touch of instinct, simple materials become something worth holding. At Let’s Make a Buy, we celebrate the magic of making by hand, the craft, and the stories shaped into every piece."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					direction: "up",
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "mt-8 h-12 justify-self-end rounded-none border-foreground px-5 font-display text-base font-semibold lg:mt-10 lg:px-6 lg:text-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/collection",
							children: ["Explore the Collection ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})
				})]
			})
		]
	});
}
function Crafts() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1500px] px-5 py-20 md:px-10 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Crafts" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerReveal, {
			className: "mt-16 grid grid-cols-2 gap-x-3 gap-y-10 md:mt-20 md:gap-10 lg:grid-cols-4",
			children: crafts.map((craft, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, {
				direction: index % 2 === 0 ? "left" : "right",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "text-left md:text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto h-[145px] w-[145px] overflow-hidden md:h-[255px] md:w-[255px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: craft.image,
								alt: craft.name,
								className: "h-full w-full object-cover",
								loading: "lazy"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-2xl uppercase leading-none md:mt-5 md:text-4xl",
							children: craft.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-52 text-xs leading-5 md:mx-auto md:text-sm",
							children: craft.note
						})
					]
				})
			}, craft.name))
		})]
	});
}
function HandStory() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "h-[724px] px-5 py-20 md:h-auto md:px-10 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1500px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				showLine: false,
				children: "The Hand"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-16 grid grid-cols-4 items-start md:mt-[45px] md:grid-cols-[256px_256px_256px_256px] md:justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						direction: "left",
						className: "self-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "quote-color font-display text-[12px] font-medium leading-[1.2] md:text-[40px]",
							children: ["“Have nothing in your houses that you do not know to be useful, or believe to be beautiful.”", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
								className: "mt-3 text-[10px] font-normal md:mt-8 md:text-[30px]",
								children: "— William Morris"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						direction: "right",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-normal leading-[1.2] md:text-[19px] md:leading-6",
							children: "There is something quietly extraordinary about the human hand. It takes what is simple and gives it shape, takes what is ordinary and gives it meaning. Clay becomes a vessel, thread becomes form, wood becomes an object, and the smallest details begin to carry something of the person who made them. Let’s Make a Buy exists for that very reason — to celebrate the things that cannot be rushed, replicated, or separated from the hands that bring them to life. We bring together crafts shaped by different materials, traditions, places, and people, each with its own rhythm, character, and story."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						direction: "right",
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-normal leading-[1.2] md:text-[19px] md:leading-6",
							children: "We believe a handmade object is more than something to own. It is time made visible — patience, skill, imagination, and countless small decisions held together in one piece. From pottery and jewellery to woven, crocheted, carved, and crafted works, we seek out pieces that carry the spirit of their making. In a world where almost everything can be made instantly, there is still something special about what takes a pair of hands, a little patience, and the courage to make something from nothing. This is what we believe in. This is what we look for. This is why we make a buy."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						direction: "right",
						className: "self-center mx-auto w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: ef541db276f467639d9b757ffcff17a4_default,
							alt: "Handmade craft",
							className: "h-auto w-full object-contain",
							loading: "lazy"
						})
					})
				]
			})]
		})
	});
}
function EventsList({ full = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1450px] px-5 py-20 md:px-[120px] md:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Events & Sessions" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20 space-y-24 md:mt-24 md:space-y-32",
				children: events.map((event, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					direction: index % 2 === 0 ? "left" : "right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "grid grid-cols-2 items-center gap-5 md:gap-[60px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: event.image,
							alt: event.title,
							className: `h-auto w-full object-cover md:h-[281px] md:w-[281px] ${index % 2 ? "order-2 md:justify-self-end" : ""}`,
							loading: "lazy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 max-w-xl justify-self-center text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-['Modern_Sans'] text-[10px] text-primary md:text-[16px]",
									children: [
										"October ",
										17 + index,
										" — ",
										18 + index
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-2xl uppercase leading-[.95] md:mt-5 md:text-[37px]",
									children: event.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-[5px] font-light leading-5 text-[#666666] md:mt-8 md:text-[11px] md:leading-6",
									children: event.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									direction: "up",
									className: "mt-4 md:mt-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BookingDialog, {
										eventId: event.id,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-[10px] font-medium",
											children: full ? "RESERVE YOUR SEAT" : "VIEW SESSION"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
									})
								})
							]
						})]
					})
				}, event.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				direction: "up",
				className: "mt-16 text-center md:mt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "h-14 rounded-none px-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/events",
						children: ["VIEW ALL PROGRAMS", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				})
			})
		]
	});
}
function CollectionPreview() {
	const [products, setProducts] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		getProducts().then(setProducts).catch((error) => {
			console.error("SUPABASE PRODUCTS ERROR:", error);
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-20 md:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-5 md:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Explore the Collection" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerReveal, {
				className: "no-scrollbar mt-16 flex gap-4 overflow-x-auto pb-6 md:mt-20 md:gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-8 shrink-0 md:w-16" }),
					products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, {
						className: "w-[58vw] shrink-0 sm:w-80",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product })
					}, product.id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-8 shrink-0 md:w-16" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				direction: "up",
				className: "mt-12 text-center md:mt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "h-14 rounded-none px-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/collection",
						children: ["VIEW ALL PRODUCTS", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				})
			})
		]
	});
}
function SectionTitle({ children, showLine = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		direction: "left",
		className: "text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-[clamp(2.8rem,12vw,4rem)] uppercase leading-none md:text-[clamp(3.5rem,7vw,7rem)]",
			children
		}), showLine && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-auto mt-6 block h-20 w-px bg-primary md:h-24" })]
	});
}
//#endregion
export { Hero as a, HandStory as i, Crafts as n, EventsList as r, CollectionPreview as t };
