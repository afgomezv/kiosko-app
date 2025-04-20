import { formatCurrency, getImagePath } from "@/src/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import AddProductButton from "./AddProductButton";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const imagePath = getImagePath(product.image);
  return (
    <div className="flex flex-col h-full border border-gray-300 bg-white">
      <Image
        width={400}
        height={500}
        src={imagePath}
        alt={`Imagen platillo ${product.name}`}
        className="object-cover h-64 w-full"
        // quality={75} default
      />
      <div className="flex flex-col justify-between flex-1 p-5">
        <div>
          <h3 className="text-2xl font-bold">{product.name}</h3>
          <p className="mt-5 font-black text-4xl text-amber-500">
            {formatCurrency(product.price)}
          </p>
        </div>
        <AddProductButton product={product} />
      </div>
    </div>
  );
}
