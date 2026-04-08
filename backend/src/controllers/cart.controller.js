import { pool } from "../config/db.js";

// 🛒 Obtener carrito de un usuario
export const getCart = async (req, res) => {
    try {
        const { user_id } = req.params;

        const [cart] = await pool.query(
            "SELECT * FROM carts WHERE user_id = ?",
            [user_id]
        );

        if (cart.length === 0) {
            return res.json({ items: [], total: 0 });
        }

        const cartId = cart[0].id;

        const [items] = await pool.query(
            `SELECT ci.id, p.name, p.price, p.image, ci.quantity,
            (p.price * ci.quantity) as subtotal
            FROM cart_items ci
            JOIN products p ON ci.product_id = p.id
            WHERE ci.cart_id = ?`,
            [cartId]
        );

        const total = items.reduce(
            (acc, item) => acc + Number(item.subtotal), 0);

        res.json({ items, total });

    } catch (error) {
        res.status(500).json({ message: "Error al obtener carrito" });
    }
};




//Agregar al carrito
export const addToCart = async (req, res) => {
    try {
        const { user_id, product_id, quantity } = req.body;

        // 1. Buscar o crear carrito
        let [cart] = await pool.query(
            "SELECT * FROM carts WHERE user_id = ?",
            [user_id]
        );

        let cartId;

        if (cart.length === 0) {
            const [newCart] = await pool.query(
                "INSERT INTO carts (user_id) VALUES (?)",
                [user_id]
            );
            cartId = newCart.insertId;
        } else {
            cartId = cart[0].id;
        }

        // 2. Verificar si ya existe el producto
        const [existing] = await pool.query(
            "SELECT * FROM cart_items WHERE cart_id = ? AND product_id = ?",
            [cartId, product_id]
        );

        if (existing.length > 0) {
            await pool.query(
                "UPDATE cart_items SET quantity = quantity + ? WHERE id = ?",
                [quantity, existing[0].id]
            );
        } else {
            await pool.query(
                "INSERT INTO cart_items (cart_id, product_id, quantity) VALUES (?, ?, ?)",
                [cartId, product_id, quantity]
            );
        }

        res.json({ message: "Producto agregado al carrito" });

    } catch (error) {
        res.status(500).json({ message: "Error al agregar al carrito" });
        console.log(error)
    }
};





//Remover del carrito 
export const removeFromCart = async (req, res) => {
    try {
        const { item_id } = req.params;

        await pool.query(
            "DELETE FROM cart_items WHERE id = ?",
            [item_id]
        );

        res.json({ message: "Producto eliminado del carrito" });

    } catch (error) {
        res.status(500).json({ message: "Error al eliminar" });
    }
};




//Actualizar el carrito
export const updateQuantity = async (req, res) => {
    try {
        const { item_id } = req.params;
        const { quantity } = req.body;

        await pool.query(
            "UPDATE cart_items SET quantity = ? WHERE id = ?",
            [quantity, item_id]
        );

        res.json({ message: "Cantidad actualizada" });

    } catch (error) {
        res.status(500).json({ message: "Error al actualizar" });
    }
};



//Actualizar pro producto
export const updateQuantityByProduct = async (req, res) => {
    try {
        const { product_id } = req.params;
        const { quantity, user_id } = req.body;

        const [cart] = await pool.query(
            "SELECT * FROM carts WHERE user_id = ?",
            [user_id]
        );

        if (cart.length === 0) {
            return res.status(404).json({ message: "Carrito no existe" });
        }

        const cartId = cart[0].id;

        const [result] = await pool.query(
            `UPDATE cart_items 
            SET quantity = ? 
            WHERE cart_id = ? AND product_id = ?`,
            [quantity, cartId, product_id]
        );

        res.json({ message: "Cantidad actualizada por producto" });

    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
};