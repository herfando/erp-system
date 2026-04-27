import { Request, Response } from "express";
import * as productService from "../product/product.sercive";
import { createProductSchema, updateProductSchema } from "../../schemas/product.schema";


export const create = async (req: Request, res: Response) => {
    const result = createProductSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            error: result.error.format(),
        });
    }

    const product = await productService.createProduct(result.data);
    res.json(product);
};

export const getAll = async (_: Request, res: Response) => {
    const products = await productService.getAllProducts();
    res.json(products);
};

export const getById = async (req: Request, res: Response) => {
    const id = req.params.id as string;

    if (!id) {
        return res.status(400).json({ error: "ID is required" });
    }

    const product = await productService.getProductById(id);
    res.json(product);
};

export const update = async (req: Request, res: Response) => {
    const id = req.params.id as string;

    const result = updateProductSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            error: result.error.format(),
        });
    }

    // 🔥 CLEAN undefined values
    const cleanData = Object.fromEntries(
        Object.entries(result.data).filter(([_, v]) => v !== undefined)
    );

    const updated = await productService.updateProduct(id, cleanData);

    res.json(updated);
};

export const remove = async (req: Request, res: Response) => {
    const id = req.params.id as string;

    if (!id) {
        return res.status(400).json({ error: "ID is required" });
    }

    const deleted = await productService.deleteProduct(id);
    res.json(deleted);
};