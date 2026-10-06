import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-BHAQ4fPD.js
var supabaseUrl = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_W27iPEn_au3SM9LgE-KlXQ_g8fCggY_",
	"VITE_SUPABASE_URL": "https://ottkhavnwaiezmrofnyz.supabase.co"
}["VITE_SUPABASE_URL"];
var supabasePublishableKey = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_W27iPEn_au3SM9LgE-KlXQ_g8fCggY_",
	"VITE_SUPABASE_URL": "https://ottkhavnwaiezmrofnyz.supabase.co"
}["VITE_SUPABASE_PUBLISHABLE_KEY"];
if (!supabaseUrl || !supabasePublishableKey) throw new Error("Missing Supabase environment variables");
var supabase = createClient(supabaseUrl, supabasePublishableKey);
async function getProducts() {
	console.log("🟡 getProducts() START");
	const { data, error } = await supabase.from("products").select("*").eq("is_active", true).order("created_at", { ascending: false });
	console.log("🟢 PRODUCTS RESPONSE:", {
		data,
		error,
		count: data?.length
	});
	if (error) {
		console.error("🔴 PRODUCTS ERROR:", error);
		throw error;
	}
	const products = data ?? [];
	if (products.length === 0) {
		console.warn("🟠 NO PRODUCTS RETURNED");
		return [];
	}
	const productIds = products.map((product) => product.id);
	console.log("🔵 PRODUCT IDS:", productIds);
	const { data: images, error: imagesError } = await supabase.from("product_images").select("*").in("product_id", productIds).order("sort_order", { ascending: true });
	console.log("🟢 IMAGES RESPONSE:", {
		images,
		error: imagesError,
		count: images?.length
	});
	if (imagesError) {
		console.error("🔴 IMAGES ERROR:", imagesError);
		throw imagesError;
	}
	const result = products.map((product) => ({
		...product,
		images: (images ?? []).filter((image) => image.product_id === product.id).sort((a, b) => a.sort_order - b.sort_order)
	}));
	console.log("✅ FINAL PRODUCTS:", result);
	return result;
}
async function getProductById(id) {
	const { data, error } = await supabase.from("products").select("*").eq("id", id).eq("is_active", true).maybeSingle();
	if (error) throw error;
	if (!data) return null;
	const { data: images, error: imagesError } = await supabase.from("product_images").select("*").eq("product_id", id).order("sort_order", { ascending: true });
	if (imagesError) throw imagesError;
	return {
		...data,
		images: images ?? []
	};
}
//#endregion
export { getProducts as n, getProductById as t };
