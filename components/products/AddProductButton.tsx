"use client";

import { useMemo } from "react";
import { useStore } from "@/src/store";
import { Product } from "@prisma/client";
import { MAX_ITEMS } from "@/src/constants";

type AddProductButtonProps = {
  product: Product;
};

export default function AddProductButton({ product }: AddProductButtonProps) {
  const order = useStore((state) => state.order);
  const itemOrder = order.find((item) => item.id === product.id);
  const disableAddToOrder = useMemo(
    () => itemOrder?.quantity === MAX_ITEMS,
    [itemOrder]
  );

  const addToOrder = useStore((state) => state.addToOrder);
  return (
    <button
      className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer disabled:opacity-20"
      onClick={() => addToOrder(product)}
      disabled={disableAddToOrder}
    >
      Agregar
    </button>
  );
}
