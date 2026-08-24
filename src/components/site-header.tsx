import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useCart, cartCount } from "@/lib/cart";
import logo from "@/assets/reality-bee-logo.png.asset.json";

export function SiteHeader() {
  const items = useCart((s) => s.items);
  const count = cartCount(items);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link to="/" className="flex items-center">
          <img src={logo.url} alt="Reality Bee" className="h-14 w-auto" />
        </Link>
        <nav className="hidden gap-7 text-sm font-medium text-foreground/80 md:flex">
          <Link to="/shop" className="hover:text-primary" activeProps={{ className: "text-primary" }}>Art Prints</Link>
          <Link to="/print-designs" className="hover:text-primary" activeProps={{ className: "text-primary" }}>Print Designs</Link>
          <Link to="/fabric-printing" className="hover:text-primary" activeProps={{ className: "text-primary" }}>Fabric Printing</Link>
          <Link to="/corporate-branding" className="hover:text-primary" activeProps={{ className: "text-primary" }}>Corporate Branding</Link>
          <Link to="/branded-gifts" className="hover:text-primary" activeProps={{ className: "text-primary" }}>Branded Gifts</Link>
          <Link to="/reviews" className="hover:text-primary" activeProps={{ className: "text-primary" }}>Reviews</Link>
          <Link to="/about" className="hover:text-primary" activeProps={{ className: "text-primary" }}>About</Link>
        </nav>
        <Link
          to="/cart"
          className="relative inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm font-medium hover:border-primary hover:text-primary"
        >
          <ShoppingBag className="h-4 w-4" />
          <span className="hidden sm:inline">Basket</span>
          {count > 0 && (
            <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-semibold text-primary-foreground">
              {count}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}