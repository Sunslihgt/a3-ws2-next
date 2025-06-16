"use client"

import { useCart } from "@/context/CartContext";
import { Product } from "@/types/Product";

export default function Cart() {
    const cartContext = useCart();
    const cart = cartContext?.cart ?? [];

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Votre Panier</h1>
            
            {cart.length > 0 ? (
                <ul className="space-y-4">
                    {cart.map((item: Product) => (
                        <li key={item.id} className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <img src={item.image} alt={item.title} className="w-16 h-16" />
                                <div>
                                    <h2 className="font-bold">{item.title}</h2>
                                    <p>{item.price} €</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Votre panier est vide.</p>
            )}
        </div>
    );
}