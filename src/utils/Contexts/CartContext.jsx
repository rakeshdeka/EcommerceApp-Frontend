import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [item, setItem] = useState([]);

    const addToCart = (product) => {
        setItem([...item, product]);
    };

    return (
        <CartContext.Provider value={{ item, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
