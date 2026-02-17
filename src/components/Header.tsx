import { Search, MapPin, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const Header = () => {
  const { totalItems, totalPrice, setIsCartOpen } = useCart();
  const [search, setSearch] = useState("");

  return (
    <header className="sticky top-0 z-50 border-b bg-card shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        {/* Logo */}
        <div className="flex shrink-0 items-center gap-1">
          <span className="text-2xl font-bold text-primary">Blink</span>
          <span className="text-2xl font-bold text-secondary">it</span>
        </div>

        {/* Delivery info */}
        <div className="hidden items-center gap-1 text-sm sm:flex">
          <MapPin className="h-4 w-4 text-primary" />
          <div>
            <p className="font-semibold leading-tight">Delivery in 10 mins</p>
            <p className="text-xs text-muted-foreground">Home — Sector 17, Delhi</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative mx-auto flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for atta, dal, coke and more"
            className="w-full rounded-lg border bg-muted/50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Cart */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex shrink-0 items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <>
              <span className="hidden sm:inline">{totalItems} items • ₹{totalPrice}</span>
              <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground sm:hidden">
                {totalItems}
              </span>
            </>
          )}
          {totalItems === 0 && <span className="hidden sm:inline">My Cart</span>}
        </button>
      </div>
    </header>
  );
};

export default Header;
