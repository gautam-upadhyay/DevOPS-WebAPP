import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Minus, Plus } from "lucide-react";

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem, removeItem, getItemQuantity } = useCart();
  const qty = getItemQuantity(product.id);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border bg-card p-3 transition hover:shadow-lg">
      {product.discount && (
        <span className="absolute left-2 top-2 z-10 rounded-md bg-badge-discount px-1.5 py-0.5 text-[10px] font-bold text-badge-discount-foreground">
          {product.discount}% OFF
        </span>
      )}

      {/* Image area */}
      <div className="flex h-28 items-center justify-center rounded-lg bg-muted/50 text-5xl">
        {product.image}
      </div>

      {/* Info */}
      <div className="mt-3 flex flex-1 flex-col">
        <span className="text-[11px] text-muted-foreground">{product.weight}</span>
        <h3 className="mt-0.5 text-sm font-semibold leading-tight line-clamp-2">{product.name}</h3>

        <div className="mt-auto flex items-end justify-between pt-2">
          <div>
            <span className="text-sm font-bold">₹{product.price}</span>
            {product.originalPrice && (
              <span className="ml-1 text-xs text-muted-foreground line-through">₹{product.originalPrice}</span>
            )}
          </div>

          {qty === 0 ? (
            <button
              onClick={() => addItem(product)}
              className="rounded-lg border border-primary px-3 py-1 text-xs font-bold text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              ADD
            </button>
          ) : (
            <div className="flex items-center gap-1.5 rounded-lg bg-primary px-1 py-0.5">
              <button onClick={() => removeItem(product.id)} className="rounded p-0.5 text-primary-foreground hover:bg-primary-foreground/20">
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="min-w-[16px] text-center text-xs font-bold text-primary-foreground">{qty}</span>
              <button onClick={() => addItem(product)} className="rounded p-0.5 text-primary-foreground hover:bg-primary-foreground/20">
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
