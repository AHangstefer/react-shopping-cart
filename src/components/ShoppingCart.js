import React, {useContext} from 'react';
import {ProductContext} from "../App.js";


// Components
import Item from './ShoppingCartItem';

const ShoppingCart = props => {
	
	const cart = useContext(ProductContext).cart;

	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;


// pre context

// return props.cart.reduce((acc, value) => {
// 	return acc + value.price;
// }, 0).toFixed(2);

// <div className="shopping-cart">
// 			{props.cart.map(item => (
// 				<Item key={item.id} {...item} />
// 			))}

// 			<div className="shopping-cart__checkout">
// 				<p>Total: ${getCartTotal()}</p>
// 				<button>Checkout</button>
// 			</div>
// 		</div>