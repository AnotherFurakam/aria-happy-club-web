import type { Product } from "../../../interfaces/product";
import ProductCard from "./ProductCard.tsx";
import { useEffect, useState } from "react";

const ProductGallery = () => {
  const [topProduct, setTopProduct] = useState<Product[]>([]);


  const getProducts = async () => {
    const productResponse = await fetch(
      `https://samamander-api.onrender.com/api/product?pageNumber=1&pageSize=20`
    ).then((res) => res.json());
    setTopProduct(productResponse.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className="my-5">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-center text-4xl border-b-[3px] border-b-purple p-2">
          Productos y servicios disponibles
        </h1>
        <div className="flex gap-4">
          {topProduct &&
            topProduct.map((product) => <ProductCard product={product} />)}
        </div>
      </div>
    </main>
  );
};

export default ProductGallery;
