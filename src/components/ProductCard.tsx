import { Product } from "@/types/Product";
import { AiFillStar, AiFillShopping } from 'react-icons/ai';
import Link from "next/link";
import { useCart } from "@/context/CartContext";

type ProductCardProps = {
    product: Product;
    displayAll: boolean;
};

export default function ProductCard({ product, displayAll }: ProductCardProps) {
    console.log(displayAll, product);
    const cartContext = useCart();

    const handleAddedToCart = () => {
        if (cartContext?.addToCart) {
            cartContext.addToCart(product);
        }
    }

    return (
        <Link href={`/product/${product.id}`} className="w-full">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow cursor-pointer">
                <img src={product.image} alt={product.title} className="w-32 h-32 object-contain mb-4" />

                <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    {product.title}
                </h2>

                { displayAll && (
                    <>
                        <p className="text-gray-800 text-md text-center flex items-center justify-center gap-1 mb-6">
                            ${product.price} - {product.rating.rate}
                            <AiFillStar className="inline text-yellow-500" />
                            ({product.rating.count})
                        </p>
                        <button
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                            onClick={handleAddedToCart}
                        >
                            <AiFillShopping />
                            Add to cart
                        </button>
                    </>
                )}

                <p className="text-gray-600 text-sm text-center">
                    {product.description}
                </p>


            </div>
        </Link>
    )
}
