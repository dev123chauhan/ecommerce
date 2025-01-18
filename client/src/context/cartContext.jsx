// context/CartContext.js

import  { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import PropTypes from 'prop-types'; // Import PropTypes

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwt_decode(token);
      setUserId(decoded.userId); // Set the userId dynamically from the JWT token
    }
  }, []);

  const addToCart = async (productId) => {
    if (!userId) return; // Ensure userId is available

    try {
      const res = await axios.post('/api/cart/add', { userId, productId });
      setCart(res.data);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (productId) => {
    if (!userId) return; // Ensure userId is available

    try {
      const res = await axios.delete('/api/cart/remove', { data: { userId, productId } });
      setCart(res.data);
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    if (!userId) return; // Ensure userId is available

    try {
      const res = await axios.put('/api/cart/update-quantity', { userId, productId, quantity });
      setCart(res.data);
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default CartContext;
