import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";

export default async function Home() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*");

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <p className="p-8 text-destructive">Error loading products: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-8 max-w-7xl mx-auto w-full">

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products?.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle className="text-base">{product.name}</CardTitle>
              <Badge variant="secondary" className="w-fit">
                {product.category}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="font-bold">₱{product.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
    </div>
  );
}