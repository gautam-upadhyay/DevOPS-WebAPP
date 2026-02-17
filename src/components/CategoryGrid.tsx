import { categories } from "@/data/products";

interface CategoryGridProps {
  selectedCategory: string | null;
  onSelectCategory: (id: string | null) => void;
}

const CategoryGrid = ({ selectedCategory, onSelectCategory }: CategoryGridProps) => {
  return (
    <section className="py-6">
      <h2 className="mb-4 text-lg font-bold">Shop by Category</h2>
      <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(selectedCategory === cat.id ? null : cat.id)}
            className={`flex flex-col items-center gap-2 rounded-xl p-3 transition hover:shadow-md ${
              selectedCategory === cat.id
                ? "ring-2 ring-primary bg-accent"
                : cat.color
            }`}
          >
            <span className="text-3xl">{cat.icon}</span>
            <span className="text-center text-xs font-medium leading-tight">{cat.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
