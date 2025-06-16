import { Product } from "./Product";

export type CartProduct = {
    product: Product;
    quantity: number;
}

export type CartContext = {
    cart: CartProduct[];
    addToCart: (product: CartProduct) => void;
};