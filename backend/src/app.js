import express from "express";
import cors from "cors";
import productRoutes from "./routes/products.routes.js";
import cartRoutes from "./routes/cart.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", productRoutes);
app.use("/api", cartRoutes);
export default app;