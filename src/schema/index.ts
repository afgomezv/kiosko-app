import { z } from "zod";

export const OrderSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  total: z.number().min(1, "La orden tiene errores"),
  order: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      price: z.number(),
      quantity: z.number(),
      subTotal: z.number(),
    })
  ),
});
