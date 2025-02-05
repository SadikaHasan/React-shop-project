import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

const [cartItems,serCartItems] = useState({});
//добавяне и премахмане на продукт от количката
const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
        serCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else {
        serCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
}

    const removeFromCart = (itemId) => {
        serCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
//за изчисляването на сумата
    const getTotalCartAmount = () => {
        let totalAmount=0;
        for(const item in cartItems)
        {
            if (cartItems[item]>0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price* cartItems[item];
            }
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItems,
        serCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount

    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
