import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/data/products";

export type CartItem = {
  id: string;
  slug: string;
  title: string;
  image: string;
  price: number;
  qty: number;
};

type CartState = {
  items: CartItem[];
  add: (p: Product, qty?: number) => void;
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

// Prices in source data are GBP (from Etsy UK). Convert to Nigerian Naira for display.
const GBP_TO_NGN = 2100;

/**
 * GBP -> whole Naira. The payment gateway is charged in Naira, so this is the
 * amount that must be sent to the order API — never the raw GBP figure.
 */
export const toNaira = (n: number) => Math.round(n * GBP_TO_NGN);

export const money = (n: number) => `₦${toNaira(n).toLocaleString("en-NG")}`;
