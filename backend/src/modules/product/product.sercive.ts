import { prisma } from "../../lib/prisma";

export const createProduct = async (data: {
    name: string;
    type: string;
    unit: string;
}) => {
    return await prisma.product.create({
        data,
    });
};

export const getAllProducts = async () => {
    return await prisma.product.findMany({
        orderBy: { createdAt: "desc" },
    });
};

export const getProductById = async (id: string) => {
    return await prisma.product.findUnique({
        where: { id },
    });
};

export const updateProduct = async (
    id: string,
    data: { name?: string; type?: string; unit?: string }
) => {
    return await prisma.product.update({
        where: { id },
        data,
    });
};

export const deleteProduct = async (id: string) => {
    return await prisma.product.delete({
        where: { id },
    });
};