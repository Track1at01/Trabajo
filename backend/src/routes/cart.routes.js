import { Router } from "express";
import {
    getCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    updateQuantityByProduct
} from "../controllers/cart.controller.js";

const router = Router();

router.get("/cart/:user_id", getCart);
router.post("/cart", addToCart);
router.delete("/cart/item/:item_id", removeFromCart);
router.put("/cart/item/:item_id", updateQuantity);
router.put("/cart/product/:product_id", updateQuantityByProduct);

export default router;