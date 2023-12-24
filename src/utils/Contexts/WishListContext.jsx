import React, { createContext, useContext, useState } from 'react';

const WishListContext = createContext();

export function WishListProvider({ children }) {
    const [wishItem, setWishItem] = useState([]);
     const [isWishClicked, setWishIsClicked] = useState(false);  
    //  const [removeWishItem,setRemoveWishItme]=useState([])
    console.log("on the wishlist", wishItem);
   

    const addToWishList = (product) => {
        setWishItem([...wishItem, product]);
        setWishIsClicked((prevStates) => ({ ...!prevStates, [product.id]: true }))
    };

    return (
        <WishListContext.Provider value={{ wishItem, addToWishList,isWishClicked }}>
            {children}
        </WishListContext.Provider>
    );
}

export function useWishLIst() {
    return useContext(WishListContext);
}
