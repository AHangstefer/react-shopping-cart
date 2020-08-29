import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
//import {ProductContext} from "./contexts/allContexts.js"
import {ProductContext} from "../App.js";


const Navigation = props => {
	const cart = useContext(ProductContext);
	console.log(cart);
	return (
	  <div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
