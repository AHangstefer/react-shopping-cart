import React, { useState, useContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {ProductContext} from "./contexts/allContexts";

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

export const Product

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([products]);

	const addItem = item => {
		// add the given item to the cart
		//setCart(cart.push(item));
		//setCart(item);
		cart.push(item);

		console.log("cart: ", cart, "item: ", item);
	};

	return (
		<div className="App">
			
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products products={products} addItem={addItem} />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
		</div>
	);
}

export default App;
