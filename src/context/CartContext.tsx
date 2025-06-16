"use client"

import { createContext, useContext, useState, ReactNode } from "react";
import { CartContext as CartContextType, CartProduct } from "@/types/CartContext";

export const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
    children: ReactNode;
};

export const cartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<CartProduct[]>([]);

    const addToCart = (product: CartProduct) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext); 