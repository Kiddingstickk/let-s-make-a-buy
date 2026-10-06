import { supabase } from "./supabase";

export type ProductImage = {
  id: string;
  product_id: string;
  image_url: string;
  sort_order: number;
  created_at: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number;
  category: string;
  stock: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  images: ProductImage[];
};

export async function getProducts(): Promise<Product[]> {
  console.log("🟡 getProducts() START");

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  console.log("🟢 PRODUCTS RESPONSE:", {
    data,
    error,
    count: data?.length,
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

  const { data: images, error: imagesError } = await supabase
    .from("product_images")
    .select("*")
    .in("product_id", productIds)
    .order("sort_order", { ascending: true });

  console.log("🟢 IMAGES RESPONSE:", {
    images,
    error: imagesError,
    count: images?.length,
  });

  if (imagesError) {
    console.error("🔴 IMAGES ERROR:", imagesError);
    throw imagesError;
  }

  const result = products.map((product) => ({
    ...product,
    images: (images ?? [])
      .filter((image) => image.product_id === product.id)
      .sort((a, b) => a.sort_order - b.sort_order),
  }));

  console.log("✅ FINAL PRODUCTS:", result);

  return result;
}

export async function getProductById(
  id: string,
): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .eq("is_active", true)
    .maybeSingle();

  if (error) {
    throw error;
  }

  if (!data) {
    return null;
  }

  const { data: images, error: imagesError } = await supabase
    .from("product_images")
    .select("*")
    .eq("product_id", id)
    .order("sort_order", { ascending: true });

  if (imagesError) {
    throw imagesError;
  }

  return {
    ...data,
    images: images ?? [],
  };
}