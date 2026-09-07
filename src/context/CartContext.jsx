import { createContext, useContext, useMemo, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { cartLineKey } from "../utils/format.js";

const CartContext = createContext(null);

const FREE_SHIPPING_THRESHOLD = 100000;
const SHIPPING_FEE = 3500;

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("natyx_cart", []);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function addToCart(product, { size, color, quantity = 1 }) {
    const key = cartLineKey(product.id, size, color);

    setCartItems((prev) => {
      const existing = prev.find((item) => item.key === key);

      if (existing) {
        return prev.map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [
        ...prev,
        {
          key,
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.images[color],
          size,
          color,
          quantity,
        },
      ];
    });

    setIsCartOpen(true);
  }

  function removeFromCart(key) {
    setCartItems((prev) => prev.filter((item) => item.key !== key));
  }

  function updateQuantity(key, quantity) {
    if (quantity < 1) return removeFromCart(key);
    setCartItems((prev) =>
      prev.map((item) => (item.key === key ? { ...item, quantity } : item)),
    );
  }

  function updateVariant(key, { size, color }) {
    setCartItems((prev) => {
      const newItem = {
        key,
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.images[color],
        size,
        color,
        quantity,
      };

      const existing = prev.find((item) => item.key === key);

      if (existing) {
        return prev.map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...prev, newItem];
    });
  }

  function clearCart() {
    setCartItems([]);
  }

  const cartCount = useMemo(
    () => cartItems.reduce((sum, i) => sum + i.quantity, 0),
    [cartItems],
  );
  const cartSubtotal = useMemo(
    () => cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [cartItems],
  );
  const shippingFee =
    cartSubtotal === 0 || cartSubtotal >= FREE_SHIPPING_THRESHOLD
      ? 0
      : SHIPPING_FEE;
  const cartTotal = cartSubtotal + shippingFee;

  const value = {
    cartItems,
    cartCount,
    cartSubtotal,
    shippingFee,
    cartTotal,
    freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    updateVariant,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
