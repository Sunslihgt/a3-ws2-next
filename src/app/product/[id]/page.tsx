"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Product } from "@/types/Product";
import { getProduct } from "@/utils/api";
import ProductCard from "@/components/ProductCard";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      getProduct(Number(id)).then(setProduct);
    }
  }, [id]);

  if (!product) {
    return <div className="p-4">Chargement...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <ProductCard product={product} displayAll={true} />
    </div>
  );
}
