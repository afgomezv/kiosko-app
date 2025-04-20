import { OrderWithProducts } from "@/src/types";

type OrderLastestItemProps = {
  order: OrderWithProducts;
};

export default function OrderLastestItem({ order }: OrderLastestItemProps) {
  return (
    <div className="h-full flex flex-col justify-between bg-white shadow p-5 rounded-lg">
      <div>
        <p className="text-2xl font-bold text-slate-600">
          Cliente: {order.name}
        </p>

        <ul
          className="mt-4 max-h-40 overflow-y-auto pr-2 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500"
          role="list"
        >
          {order.orderProducts.map((product) => (
            <li key={product.id} className="flex py-3 text-lg">
              <p>
                <span>({product.quantity}) </span>
                {product.product.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
