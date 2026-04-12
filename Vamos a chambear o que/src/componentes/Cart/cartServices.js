const API = "http://localhost:3030/api/cart";

export const addToCart = async (product_id) => {
    const res = await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user_id: 1,
            product_id,
            quantity: 1,
        }),
    });

    return res.json();
};

export const getCart = async () => {
    const res = await fetch(`${API}/1`);
    return res.json();
};