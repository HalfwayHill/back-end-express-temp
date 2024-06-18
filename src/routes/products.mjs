import { Router } from "express";
import { products } from "../mocks/index.mjs"
import { Product } from "../db/mongoose/schemas/product-schema.mjs";

const productRouter = Router();

productRouter.get(
    '/',
    async (req, res) => {

        try {
            const productList = await Product.find();
            res.sendSuccess(productList);
        } catch (error) {
            return res.sendFailure(400, error)
        }
    }
);

productRouter.post(
    '/',
    async (req, res) => {
        const { body } = req;

        const newProduct = new Product(body);
        try {
            const saveProduct = await newProduct.save();
            res.sendSuccess({ msg: "添加成功", data: saveProduct });
        } catch (error) {
            return res.sendFailure(400, error)
        }
    }
);

export default productRouter;