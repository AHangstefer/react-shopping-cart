import React, { useState, useContext, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
//import ProductContext from "../contexts/allContexts";
import {createContext} from "react"

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


export const ProductContext = createContext();

// const [products] = useState(data);
// const [cart, setCart] = useState([]);

// const addItem = item => {
// 		// add the given item to the cart
// 		//setCart(cart.push(item));
// 		//setCart(item);
// 		cart.push(item);

// 		console.log("cart: ", cart, "item: ", item);
// 	};


function App() {

	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		//setCart(cart.push(item));
		//setCart(item);
		cart.push(item);

		console.log("cart: ", cart, "item: ", item);
	};

	

	return (
		<div className="App">
		  <ProductContext.Provider value= {{products, cart}} >
			<Navigation />

			{/* Routes */}
			<Route exact path="/">
				<Products addItem= {addItem} />
			</Route>

			<Route path="/cart">
				<ShoppingCart />
			</Route>
			</ProductContext.Provider>
		</div>
	);
}

export default App;

// pre context
// {/* <Navigation cart={cart} />

// {/* Routes */}
// <Route exact path="/">
// 	<Products products={products} addItem={addItem} />
// </Route>

// <Route path="/cart">
// 	<ShoppingCart cart={cart} />
// </Route> */}
