import type { Product } from "@interfaces/product";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const openWsp = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=51936543222&text=Hola%20estoy%20interesado%20en%20saber%20mas%20acerca%20de%20Aria%20Happy%20Club%20%F0%9F%98%80",
      "_blank"
    );
  };

  return (
    <div className="border-2 border-purple/40 rounded-md overflow-hidden w-[300px] h-[410px] flex flex-col">
      <img
        src={product.urlImage}
        alt={product.name}
        className="w-full h-72 object-cover"
      />
      <div className="flex flex-col gap-4 p-3">
        <p className="text-center text-xl uppercase truncate">{product.name}</p>
        <button
          id="wspButton"
          onClick={openWsp}
          className="bg-purple/90 hover:bg-purple text-white w-full py-3 rounded-md"
        >
          Mas información
        </button>
      </div>
    </div>
  );
}

export default ProductCard