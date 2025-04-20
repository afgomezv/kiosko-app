"use client";
import useSWR from "swr";
import Logo from "@/components/ui/Logo";
import { OrderWithProducts } from "@/src/types";
import OrderLastestItem from "@/components/order/OrderLastestItem";

export default function OrdersPage() {
  const url = "/orders/api";
  const fetcher = () =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data);

  const { data, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
    refreshInterval: 3600000, // Ajustar el tiempo más corto para ver revalidate en milesegundos
    revalidateOnFocus: false,
  });

  if (isLoading) return <p>Cargando..</p>;
  if (data)
    return (
      <>
        <h1 className="text-center mt-20 text-6xl font-black">
          Ordenes Listas
        </h1>
        <Logo />
        {data.length ? (
          <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto mt-10 auto-rows-fr">
            {data.map((order) => (
              <OrderLastestItem key={order.id} order={order} />
            ))}
          </div>
        ) : (
          <p className="text-center my-10"> No hay ordenes listas</p>
        )}
      </>
    );
}
