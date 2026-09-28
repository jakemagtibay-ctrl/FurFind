import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*");

  if (error) {
    return <p className="p-8 text-red-600">Error loading products: {error.message}</p>;
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-1">PawCart</h1>
      <p className="text-gray-600 mb-8">Happy Finds for Happy Paws.</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products?.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="mt-2 font-bold">₱{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}