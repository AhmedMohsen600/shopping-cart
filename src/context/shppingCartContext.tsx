import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContextProps = {
  increaseCartQty: (id: number) => void;
  decreaseCartQty: (id: number) => void;
  removeFromCart: (id: number) => void;
  getItemQty: (id: number) => number;
};

type CartItem = {
  id: number;
  qty: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getItemQty = (id: number): number => {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  };

  const increaseCartQty = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) === undefined) {
        return [...currentItems, { id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQty = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.qty === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{ getItemQty, increaseCartQty, decreaseCartQty, removeFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
