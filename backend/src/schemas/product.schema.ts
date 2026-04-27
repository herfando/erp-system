import { z } from "zod";

export const createProductSchema = z.object({
    name: z.string().min(1, "Name is required"),
    type: z.string().min(1, "Type is required"),
    unit: z.string().min(1, "Unit is required"),
});

export const updateProductSchema = z.object({
    name: z.string().optional(),
    type: z.string().optional(),
    unit: z.string().optional(),
});