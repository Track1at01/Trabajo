import { Router } from "express";
import {
    getProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
} from "../controllers/product.controller.js";

const router = Router();

router.get("/products", getProducts);
router.post("/products", createProduct);
router.get("/products/:id", getProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;