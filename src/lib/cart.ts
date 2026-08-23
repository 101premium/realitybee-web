import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  slug: string;
  title: string;
  image: string;
  price: number;
  qty: number;
};

/** Minimal shape needed to add an item to the cart — decoupled from any one product source. */
type AddableProduct = {
  id: string;
  slug: string;
  title: string;
  image: string;
  salePrice: number;
};

type CartState = {
  items: CartItem[];
  add: (p: AddableProduct, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      add: (p, qty = 1) =>
        set((s) => {
          const existing = s.items.find((i) => i.id === p.id);
          if (existing) {
            return {
              items: s.items.map((i) => (i.id === p.id ? { ...i, qty: i.qty + qty } : i)),
            };
          }
          return {
            items: [
              ...s.items,
              {
                id: p.id,
                slug: p.slug,
                title: p.title,
                image: p.image,
                price: p.salePrice,
                qty,
              },
            ],
          };
        }),
      remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
      setQty: (id, qty) =>
        set((s) => ({
          items: s.items.map((i) => (i.id === id ? { ...i, qty } : i)).filter((i) => i.qty > 0),
        })),
      clear: () => set({ items: [] }),
    }),
    { name: "solunasoul-cart" },
  ),
);

export const cartCount = (items: CartItem[]) => items.reduce((n, i) => n + i.qty, 0);

export const cartTotal = (items: CartItem[]) => items.reduce((n, i) => n + i.qty * i.price, 0);

// Prices are US dollars throughout — the catalogue's priceUsd is used as-is for
// display, cart totals and the amount charged. There is no currency conversion.
export const money = (n: number) =>
  `$${n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
