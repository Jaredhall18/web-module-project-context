import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Context
import {ProductContext} from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';


//Notes:
// 1. Create Context. 
// 2. Import ew context and wrap your component with it, 
// pass in Values that will be our new props for the component
// 3. In the component import 2 things: the context and useContext(from react)
// 4. run usecontext and pass in context, returning the "props" you are using
// ex. const {cart, addItem} = useContext(CartContext)  

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		console.log(item);
		setCart([
			...cart,
			item
		])
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }} >
			<CartContext.Provider value= {{cart}}	>
				<Navigation />

				{/* Routes */}
				<Route exact path="/">
					<Products  />
				</Route>

				<Route path="/cart">
					<ShoppingCart  />
				</Route>
			</CartContext.Provider>
			</ProductContext.Provider>
			
		</div>
	);
}

export default App;
