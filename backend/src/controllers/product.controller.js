import { pool } from "../config/db.js";

// Obtener todos
export const getProducts = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM products");
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos" });
    }
};

// Crear producto
export const createProduct = async (req, res) => {
    try {
        const { name, description, price, stock, category, image } = req.body;

        const [result] = await pool.query(
            "INSERT INTO products (name, description, price, stock, category, image) VALUES (?, ?, ?, ?, ?, ?)",
            [name, description, price, stock, category, image]
        );

        res.json({ id: result.insertId, ...req.body });
    } catch (error) {
        res.status(500).json({ message: "Error al crear producto" });
    }
};

// Obtener uno
export const getProduct = async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM products WHERE id = ?",
            [req.params.id]
        );

        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener producto" });
    }
};

// Actualizar
export const updateProduct = async (req, res) => {
    try {
        const { name, description, price, stock, category, image } = req.body;

        await pool.query(
            `UPDATE products 
            SET name=?, description=?, price=?, stock=?, category=?, image=? 
            WHERE id=?`,
            [name, description, price, stock, category, image, req.params.id]
        );

        res.json({ message: "Producto actualizado" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar" });
    }
};

// Eliminar
export const deleteProduct = async (req, res) => {
    try {
        await pool.query("DELETE FROM products WHERE id = ?", [
            req.params.id
        ]);

        res.json({ message: "Producto eliminado" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar" });
    }
};