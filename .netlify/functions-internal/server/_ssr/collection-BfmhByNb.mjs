import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as Reveal, c as StaggerItem, i as ProductCard, l as StaggerReveal } from "./storefront-SqhskZUa.mjs";
import { t as Route } from "./collection-UwHNT7jD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collection-BfmhByNb.js
var import_jsx_runtime = require_jsx_runtime();
function CollectionPage() {
	const products = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-[1500px] overflow-hidden px-5 py-16 md:px-10 md:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-end gap-8 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				direction: "left",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-display text-[clamp(3.4rem,14vw,4.2rem)] uppercase leading-[.8] md:text-[clamp(5rem,11vw,11rem)]",
					children: [
						"The",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Collection"
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				direction: "right",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-lg pb-3 text-sm text-muted-foreground md:text-base",
					children: "Small-batch pieces shaped by mountain materials, inherited techniques, and a playful eye for color."
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerReveal, {
			className: "mt-14 grid grid-cols-2 gap-x-3 gap-y-12 md:mt-20 md:gap-x-7 md:gap-y-16 lg:grid-cols-4",
			children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }) }, product.id))
		})]
	});
}
//#endregion
export { CollectionPage as component };
