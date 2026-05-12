import { createContext, useContext, useEffect, useState } from "react";
import { addToCart, getCart } from "./cartService";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const loadCart = async () => {
        const data = await getCart();
        setCart(data.items);
    };

    const addItem = async (product_id) => {
        await addToCart(product_id);
        loadCart(); // 🔥 refresca carrito
    };

    useEffect(() => {
        loadCart();
    }, []);

    return (
        <CartContext.Provider value={{ cart, addItem }}>
        {children}
        </CartContext.Provider>
    );
};