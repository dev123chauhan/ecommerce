import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from '../slice/WishlistSlice';
import authReducer from '../slice/AuthSlice';
import cartReducer from '../slice/CartSlice';
import productReducer from '../slice/ProductSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    products: productReducer,
  },
});