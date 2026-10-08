import { K as notFound, _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as getProductById } from "./products-BHAQ4fPD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._productId-DI7DVJV-.js
var $$splitComponentImporter = () => import("./products._productId-BXRCVG1o.mjs");
var Route = createFileRoute("/products/$productId")({
	loader: async ({ params }) => {
		const product = await getProductById(params.productId);
		if (!product) throw notFound();
		return product;
	},
	head: ({ loaderData }) => {
		const title = loaderData ? `${loaderData.name} — Let’s Make a Buy` : "Product unavailable — Let’s Make a Buy";
		const description = loaderData ? `${loaderData.category}, handmade in the Himalayas. Shop ${loaderData.name} for ₹${loaderData.price}.` : "This handmade product is unavailable.";
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
