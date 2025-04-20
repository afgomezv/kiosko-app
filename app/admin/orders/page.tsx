"use client";
import useSWR from "swr";
import OrderCard from "@/components/order/OrderCard";
import Heading from "@/components/ui/Heading";
import { OrderWithProducts } from "@/src/types";

export default function OrdersPage() {
  const url = "/admin/orders/api";
  const fetcher = () =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data);

  const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
    refreshInterval: 3600000,
    revalidateOnFocus: false,
  });

  // const refreshOrders = async () => {
  //   "use server";
  //   revalidatePath("/admin/orders");
  // };
  if (isLoading) return "Cargando..";

  if (data)
    return (
      <>
        <Heading>Administrar Ordenes</Heading>
        {/* <form action={refreshOrders}>
        <button
          type="submit"
          className="bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer"
        >
          Actualizar Ordenes
        </button>
      </form> */}
        {data.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5 auto-rows-fr">
            {data.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        ) : (
          <p className="text-center">No hay ordenes pendientes</p>
        )}
      </>
    );
}
