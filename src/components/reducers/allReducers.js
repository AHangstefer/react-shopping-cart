import react, {useState} from 'react';

export const [products] = useState(data);
export const [cart, setCart] = useState([]);

export const addItem = item => {
       // add the given item to the cart
       //setCart(cart.push(item));
       //setCart(item);
       cart.push(item);

       console.log("cart: ", cart, "item: ", item);
   };