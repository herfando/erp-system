import { Request, Response } from "express";
import * as productService from "../product/product.sercive";

export const create = async (req: Request, res: Response) => {
    try {
        const product = await productService.createProduct(req.body);
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: "Failed to create product" });
    }
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

    if (!id) {
        return res.status(400).json({ error: "ID is required" });
    }

    const updated = await productService.updateProduct(id, req.body);
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