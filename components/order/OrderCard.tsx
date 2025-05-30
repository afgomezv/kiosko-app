import { completeOrder } from "@/actions/complete-order-action";
import { OrderWithProducts } from "@/src/types";
import { formatCurrency } from "@/src/utils";

type OrderCardProps = {
  order: OrderWithProducts;
};

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <section
      aria-labelledby="summary-heading"
      className="flex flex-col justify-between h-full rounded-lg bg-gray-50 shadow-xl px-4 py-6 sm:p-6 lg:p-8"
    >
      <div>
        <p className="text-2xl font-medium text-gray-900">
          Cliente: {order.name}
        </p>
        <p className="text-lg font-medium text-gray-900 mt-2">
          Productos Ordenados:
        </p>

        <dl className="mt-4 space-y-4 max-h-52 overflow-y-auto pr-2">
          {order.orderProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-2 border-t border-gray-200 pt-4"
            >
              <dt className="flex items-center text-sm text-gray-600">
                <span className="font-black">({product.quantity}) </span>
              </dt>
              <dd className="text-sm font-medium text-gray-900">
                {product.product.name}
              </dd>
            </div>
          ))}
        </dl>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 mt-4">
          <dt className="text-base font-medium text-gray-900">
            Total a Pagar:
          </dt>
          <dd className="text-base font-medium text-gray-900">
            {formatCurrency(order.total)}
          </dd>
        </div>
      </div>

      <form action={completeOrder}>
        <input type="hidden" value={order.id} name="order_id" />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
        >
          Marcar Orden Completada
        </button>
      </form>
    </section>
  );
}
