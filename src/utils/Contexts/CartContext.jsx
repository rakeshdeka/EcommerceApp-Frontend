import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [item, setItem] = useState([]);
     const [isAddClicked, setIsAddClicked] = useState(false);  
     console.log("on the cart",item);
   

    const addToCart = (product) => {
        setItem([...item, product]);
         setIsAddClicked((prevStates) => ({ ...prevStates, [product.id]: true }))
    };

    return (
        <CartContext.Provider value={{ item, addToCart,isAddClicked }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
