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

export const OrderIdSchema = z.object({
  orderId: z
    .string()
    .transform((value) => parseInt(value))
    .refine((value) => value > 0, { message: "Hay errores" }),
});

export const SearchSchema = z.object({
  search: z.string().trim().min(1, "La búsqueda es obligatoria"),
});

export const ProductSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "El nombre del producto es obligatorio" }),
  price: z
    .string()
    .trim()
    .transform((value) => parseFloat(value))
    .refine((value) => value > 0, { message: "El precio no es  válido" })
    .or(z.number().min(1, { message: "La categoría es obligatoria" })),
  categoryId: z
    .string()
    .trim()
    .transform((value) => parseInt(value))
    .refine((value) => value > 0, { message: "La categoría es obligatoria" })
    .or(z.number().min(1, { message: "La categoría es obligatoria" })),
  image: z.string().min(1, { message: "La imagen es obligatoria" }),
});
