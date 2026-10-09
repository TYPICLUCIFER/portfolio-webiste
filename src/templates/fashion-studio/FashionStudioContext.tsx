import React, { createContext, useContext, useState } from 'react';
import type {
  FashionScreenId,
  FashionThemeVariant,
  FashionCartItem,
  FashionProduct,
} from './types';
import { INITIAL_CART_ITEMS } from './fashionStudioData';

interface FashionStudioContextType {
  activeScreen: FashionScreenId;
  setActiveScreen: (screen: FashionScreenId) => void;
  themeVariant: FashionThemeVariant;
  setThemeVariant: (theme: FashionThemeVariant) => void;
  cartItems: FashionCartItem[];
  addToCart: (product: FashionProduct, color: string, size: string) => void;
  updateQuantity: (index: number, delta: number) => void;
  removeItem: (index: number) => void;
  cartSubtotal: number;
  shippingFee: number;
  cartTotal: number;
  trackedOrderId: string;
  setTrackedOrderId: (id: string) => void;
}

const FashionStudioContext = createContext<FashionStudioContextType | undefined>(undefined);

export const FashionStudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeScreen, setActiveScreen] = useState<FashionScreenId>('home');
  const [themeVariant, setThemeVariant] = useState<FashionThemeVariant>('atelier-dark');
  const [cartItems, setCartItems] = useState<FashionCartItem[]>(INITIAL_CART_ITEMS);
  const [trackedOrderId, setTrackedOrderId] = useState<string>('#AT12345');

  const addToCart = (product: FashionProduct, color: string, size: string) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor === color &&
          item.selectedSize === size
      );
      if (existing) {
        return prev.map((item) =>
          item === existing ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          product,
          selectedColor: color,
          selectedSize: size,
          quantity: 1,
        },
      ];
    });
  };

  const updateQuantity = (index: number, delta: number) => {
    setCartItems((prev) => {
      const updated = [...prev];
      const newQty = updated[index].quantity + delta;
      if (newQty <= 0) {
        return updated.filter((_, i) => i !== index);
      }
      updated[index] = { ...updated[index], quantity: newQty };
      return updated;
    });
  };

  const removeItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const cartSubtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shippingFee = cartSubtotal > 0 ? 99 : 0;
  const cartTotal = cartSubtotal + shippingFee;

  return (
    <FashionStudioContext.Provider
      value={{
        activeScreen,
        setActiveScreen,
        themeVariant,
        setThemeVariant,
        cartItems,
        addToCart,
        updateQuantity,
        removeItem,
        cartSubtotal,
        shippingFee,
        cartTotal,
        trackedOrderId,
        setTrackedOrderId,
      }}
    >
      {children}
    </FashionStudioContext.Provider>
  );
};

export function useFashionStudio() {
  const context = useContext(FashionStudioContext);
  if (!context) {
    throw new Error('useFashionStudio must be used within FashionStudioProvider');
  }
  return context;
}
