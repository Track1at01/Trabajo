import { pool } from "../config/db.js";

// Obtener todos
export const getProducts = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM products");
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener productos" });
    }
};


// Crear producto
export const createProduct = async (req, res) => {
    try {
        const { name, description, price, stock, category, image } = req.body;

        // Validaciones
        if (!name || !price || stock === undefined) {
            return res.status(400).json({ message: "Datos obligatorios faltantes" });
        }

        if (price < 0 || stock < 0) {
            return res.status(400).json({ message: "Precio o stock inválido" });
        }

        const [result] = await pool.query(
            `INSERT INTO products 
            (name, description, price, stock, category, image) 
            VALUES (?, ?, ?, ?, ?, ?)`,
            [name, description, price, stock, category, image]
        );

        res.status(201).json({
            id: result.insertId,
            name,
            description,
            price,
            stock,
            category,
            image
        });

    } catch (error) {
        console.log(error);
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

        if (rows.length === 0) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.json(rows[0]);

    } catch (error) {
        res.status(500).json({ message: "Error al obtener producto" });
    }
};


// Actualizar
export const updateProduct = async (req, res) => {
    try {
        const { name, description, price, stock, category, image } = req.body;

        if (price < 0 || stock < 0) {
            return res.status(400).json({ message: "Precio o stock inválido" });
        }

        const [result] = await pool.query(
            `UPDATE products 
            SET name=?, description=?, price=?, stock=?, category=?, image=? 
            WHERE id=?`,
            [name, description, price, stock, category, image, req.params.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.json({ message: "Producto actualizado" });

    } catch (error) {
        res.status(500).json({ message: "Error al actualizar" });
    }
};


// Eliminar
export const deleteProduct = async (req, res) => {
    try {
        const [result] = await pool.query(
            "DELETE FROM products WHERE id = ?",
            [req.params.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.json({ message: "Producto eliminado" });

    } catch (error) {
        res.status(500).json({ message: "Error al eliminar" });
    }
};