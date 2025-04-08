import {createContext, useState, useContext} from 'react'

export const CartContext = createContext(null);

export const useCart = () =>{
    // Now paste     const cart = useContext(CartContext); from components/Cart     
    const cart = useContext(CartContext);
    return cart
}

export const CartProvider = (props) => {

    const [items, setItems] = useState([]);  // By Default array is empty as cart will also be empty by default

    return (
        <CartContext.Provider value={{items, setItems}}>   
            {props.children}
        </CartContext.Provider> 
    )
}