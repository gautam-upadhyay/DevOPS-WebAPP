import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, ShoppingBag } from "lucide-react";

const CartDrawer = () => {
  const { items, addItem, removeItem, totalItems, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            My Cart ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-2 text-muted-foreground">
            <ShoppingBag className="h-16 w-16 opacity-30" />
            <p className="font-medium">Your cart is empty</p>
            <p className="text-sm">Add items to get started</p>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-3 overflow-y-auto py-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3 rounded-lg border p-3">
                  <span className="text-3xl">{item.image}</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.weight}</p>
                    <p className="mt-0.5 text-sm font-bold">₹{item.price * item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-lg bg-primary px-1.5 py-1">
                    <button onClick={() => removeItem(item.id)} className="rounded p-0.5 text-primary-foreground hover:bg-primary-foreground/20">
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="min-w-[16px] text-center text-xs font-bold text-primary-foreground">{item.quantity}</span>
                    <button onClick={() => addItem(item)} className="rounded p-0.5 text-primary-foreground hover:bg-primary-foreground/20">
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bill */}
            <div className="border-t pt-4">
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Item Total</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span className="text-primary font-medium">FREE</span>
                </div>
                <div className="flex justify-between border-t pt-2 text-base font-bold">
                  <span>Grand Total</span>
                  <span>₹{totalPrice}</span>
                </div>
              </div>
              <button className="mt-4 w-full rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
