import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import styles from "./styles/DarkMode.module.css";



const App = () => {
  // TODO: Implement state for dark mode toggle
const [isDarkMode, setIsDarkMode] = useState(false);

// TODO: Implement state for cart management
const [cart, setCart] = useState([]);

// TODO: Implement state for category filtering
const [category, setCategory] = useState('all');

const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
};

// Logic for dynamic styling
const themeStyle = {
  backgroundColor: isDarkMode ? '#333' : '#fff',
  color: isDarkMode ? '#fff' : '#000',
  minHeight: '100vh'
};

return (
  <div style={themeStyle}>
    <h1>🛒 Shopping App</h1>
    {/* ... welcome text ... */}

    {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
    <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

    {/* TODO: Implement category filter dropdown */}
    <label>Filter by Category: </label>
    <select value={category} onChange={(e) => setCategory(e.target.value)}>
      <option value="all">All</option>
      <option value="Fruits">Fruits</option>
      <option value="Dairy">Dairy</option>
    </select>

    <ProductList selectedCategory={category} onAddToCart={addToCart} />

    {/* TODO: Implement and render Cart component */}
    <Cart cartItems={cart} />
  </div>
)
}

export default App
