import { useState, useMemo } from "react";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CategoryGrid from "@/components/CategoryGrid";
import ProductCard from "@/components/ProductCard";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import { products, categories } from "@/data/products";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const categoryName = selectedCategory
    ? categories.find((c) => c.id === selectedCategory)?.name
    : "All Products";

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-12">
        <div className="mt-4">
          <HeroBanner />
        </div>
        <CategoryGrid selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        <section>
          <h2 className="mb-4 text-lg font-bold">{categoryName}</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Index;
