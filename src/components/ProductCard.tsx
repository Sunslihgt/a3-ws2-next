import { Product } from "@/types/Product";
import { useAppDispatch } from '@/store/hooks';

type ProductCardProps = {
    product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
            <img src={product.image} alt={product.title} className="w-32 h-32 object-contain mb-4" />

            <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                {product.title}
            </h2>
            <p className="text-gray-600 text-sm text-center">
                {product.description}
            </p>
        </div>
    )
}
