import type { Product } from "../../../interfaces/product";
import { useState, type FC, useEffect } from "react";

interface ProductsProps {}

const Products: FC<ProductsProps> = ({}) => {
  const [topProducts, setTopProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    const ProductsResponse = await fetch(
      "https://samamander-api.onrender.com/api/product?pageNumber=1&pageSize=5"
    ).then((res) => res.json());
    setTopProducts(ProductsResponse.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {topProducts.map((product) => (
        <div className="bg-purple/70 p-2 rounded-md cursor-pointer hover:bg-purple/80">
          <img src={product.urlImage} alt={product.name} />
          <div>
            <p className="text-white text-lg">{product.name}</p>
          </div>
        </div>
      ))}
    </>
  );
};
export default Products;
