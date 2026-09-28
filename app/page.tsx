import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function Home() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*");

  if (error) {
    return <p className="p-8 text-red-600">Error loading products: {error.message}</p>;
  }

  return (
    <main className="min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">PawCart</h1>
        <p className="text-muted-foreground">Happy Finds for Happy Paws.</p>
      </header>

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
  );
}