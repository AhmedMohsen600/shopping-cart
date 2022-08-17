import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components/shoppingCart";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  qty: number;
};

type ShoppingCartContextProps = {
  increaseCartQty: (id: number) => void;
  decreaseCartQty: (id: number) => void;
  removeFromCart: (id: number) => void;
  getItemQty: (id: number) => number;
  // for open cart
  openCart: () => void;
  closeCart: () => void;
  cartItems: CartItem[];
  totalPrice: (price: number) => number;
  cartQty: number;
  isOpen: boolean;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartQty = cartItems.reduce((qty, item) => item.qty + qty, 0);
  // for handle menu
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  // get total price
  const totalPrice = (price: number) => {
    return cartQty * price;
  };
  // get item quantity
  const getItemQty = (id: number): number => {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  };
  // increase cart quantity
  const increaseCartQty = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) === undefined) {
        return [...currentItems, { id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) return { ...item, qty: item.qty + 1 };
          else return item;
        });
      }
    });
  };
  // decrease cart quantity
  const decreaseCartQty = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.qty === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
          } else return item;
        });
      }
    });
  };
  // remove from cart
  const removeFromCart = (id: number) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        isOpen,
        cartQty,
        totalPrice,
        cartItems,
        openCart,
        closeCart,
        getItemQty,
        increaseCartQty,
        decreaseCartQty,
        removeFromCart,
      }}
    >
      {children}
      <ShoppingCart />
    </ShoppingCartContext.Provider>
  );
}
