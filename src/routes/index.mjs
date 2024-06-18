import { Router } from "express";
import userRouter from "./users.mjs";
import productRouter from "./products.mjs";
import authRouter from "./auth.mjs";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/products", productRouter);

export default router;