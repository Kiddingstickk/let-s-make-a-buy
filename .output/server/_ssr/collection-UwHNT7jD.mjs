import { _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getProducts } from "./products-BHAQ4fPD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collection-UwHNT7jD.js
var $$splitComponentImporter = () => import("./collection-BfmhByNb.mjs");
var Route = createFileRoute("/collection")({
	loader: () => getProducts(),
	head: () => ({ meta: [
		{ title: "Handmade Collection — Let’s Make a Buy" },
		{
			name: "description",
			content: "Shop jewellery and objects handmade by artisans in the Himalayan mountains."
		},
		{
			property: "og:title",
			content: "Handmade Collection — Let’s Make a Buy"
		},
		{
			property: "og:description",
			content: "Shop jewellery and objects handmade by artisans in the Himalayan mountains."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
