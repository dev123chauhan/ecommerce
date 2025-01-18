// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [],
//     totalQuantity: 0,
//     totalAmount: 0
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const newItem = action.payload;
//       const existingItem = state.items.find(item => item.id === newItem.id);
      
//       if (existingItem) {
//         existingItem.quantity++;
//         existingItem.totalPrice = existingItem.price * existingItem.quantity;
//       } else {
//         state.items.push({
//           ...newItem,
//           quantity: 1,
//           totalPrice: newItem.price
//         });
//       }
//       state.totalQuantity++;
//       state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
//     },
//     removeFromCart: (state, action) => {
//       const id = action.payload;
//       const existingItem = state.items.find(item => item.id === id);
      
//       if (existingItem) {
//         state.totalQuantity -= existingItem.quantity;
//         state.totalAmount -= existingItem.totalPrice;
//         state.items = state.items.filter(item => item.id !== id);
//       }
//     },
//     updateQuantity: (state, action) => {
//       const { id, type } = action.payload;
//       const item = state.items.find(item => item.id === id);
      
//       if (item) {
//         if (type === 'increase') {
//           item.quantity++;
//           state.totalQuantity++;
//         } else if (type === 'decrease' && item.quantity > 1) {
//           item.quantity--;
//           state.totalQuantity--;
//         }
//         item.totalPrice = item.price * item.quantity;
//         state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
//       }
//     }
//   }
// });

// export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
// export default cartSlice.reducer;


// cartSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Async thunks for cart operations
// export const fetchCart = createAsyncThunk(
//   'cart/fetchCart',
//   async (userId) => {
//     const response = await axios.get(`http://localhost:3000/api/cart/${userId}`);
//     return response.data;
//   }
// );

// export const addToCart = createAsyncThunk(
//   'cart/addToCart',
//   async ({ userId, product }) => {
//     const response = await axios.post(`http://localhost:3000/api/cart/${userId}/add`, product);
//     return response.data;
//   }
// );

// export const removeFromCart = createAsyncThunk(
//   'cart/removeFromCart',
//   async ({ userId, productId }) => {
//     const response = await axios.delete(`http://localhost:3000/api/cart/${userId}/remove/${productId}`);
//     return response.data;
//   }
// );

// export const updateQuantity = createAsyncThunk(
//   'cart/updateQuantity',
//   async ({ userId, productId, type }) => {
//     const response = await axios.put(`http://localhost:3000/api/cart/${userId}/quantity`, {
//       productId,
//       type
//     });
//     return response.data;
//   }
// );

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [],
//     totalAmount: 0,
//     loading: false,
//     error: null
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // Fetch Cart
//       .addCase(fetchCart.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchCart.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload.items;
//         state.totalAmount = action.payload.totalAmount;
//       })
//       .addCase(fetchCart.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       // Add to Cart
//       .addCase(addToCart.fulfilled, (state, action) => {
//         state.items = action.payload.items;
//         state.totalAmount = action.payload.totalAmount;
//       })
//       // Remove from Cart
//       .addCase(removeFromCart.fulfilled, (state, action) => {
//         state.items = action.payload.items;
//         state.totalAmount = action.payload.totalAmount;
//       })
//       // Update Quantity
//       .addCase(updateQuantity.fulfilled, (state, action) => {
//         state.items = action.payload.items;
//         state.totalAmount = action.payload.totalAmount;
//       });
//   }
// });

// export default cartSlice.reducer;



// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Utility to calculate total quantity
// const calculateTotalQuantity = (items) => {
//   return items.reduce((total, item) => total + item.quantity, 0);
// };

// // Async thunks for cart operations
// export const fetchCart = createAsyncThunk(
//   'cart/fetchCart',
//   async (userId) => {
//     const response = await axios.get(`http://localhost:3000/api/cart/${userId}`);
//     return response.data;
//   }
// );

// export const addToCart = createAsyncThunk(
//   'cart/addToCart',
//   async ({ userId, product }) => {
//     const response = await axios.post(`http://localhost:3000/api/cart/${userId}/add`, product);
//     return response.data;
//   }
// );

// export const removeFromCart = createAsyncThunk(
//   'cart/removeFromCart',
//   async ({ userId, productId }) => {
//     const response = await axios.delete(`http://localhost:3000/api/cart/${userId}/remove/${productId}`);
//     return response.data;
//   }
// );

// // export const updateQuantity = createAsyncThunk(
// //   'cart/updateQuantity',
// //   async ({ userId, productId, type }) => {
// //     const response = await axios.put(`http://localhost:3000/api/cart/${userId}/quantity`, {
// //       productId,
// //       type
// //     });
// //     return response.data;
// //   }
// // );

// export const updateQuantity = createAsyncThunk(
//   'cart/updateQuantity',
//   async ({ userId, productId, type }) => {
//     const response = await axios.put(
//       `http://localhost:3000/api/cart/${userId}/quantity/${productId}`,
//       { type }
//     );
//     return response.data;
//   }
// );

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [],
//     totalAmount: 0,
//     totalQuantity: 0, // Added for total quantity
//     loading: false,
//     error: null
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // Fetch Cart
//       .addCase(fetchCart.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchCart.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload.items;
//         state.totalAmount = action.payload.totalAmount;
//         state.totalQuantity = calculateTotalQuantity(action.payload.items); // Calculate total quantity
//       })
//       .addCase(fetchCart.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       // Add to Cart
//       .addCase(addToCart.fulfilled, (state, action) => {
//         state.items = action.payload.items;
//         state.totalAmount = action.payload.totalAmount;
//         state.totalQuantity = calculateTotalQuantity(action.payload.items); // Update total quantity
//       })
//       // Remove from Cart
//       .addCase(removeFromCart.fulfilled, (state, action) => {
//         state.items = action.payload.items;
//         state.totalAmount = action.payload.totalAmount;
//         state.totalQuantity = calculateTotalQuantity(action.payload.items); // Update total quantity
//       })
//       // Update Quantity
//       // .addCase(updateQuantity.fulfilled, (state, action) => {
//       //   state.items = action.payload.items;
//       //   state.totalAmount = action.payload.totalAmount;
//       //   state.totalQuantity = calculateTotalQuantity(action.payload.items); // Update total quantity
//       // });
//       .addCase(updateQuantity.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(updateQuantity.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload.items;
//         state.totalAmount = action.payload.totalAmount;
//         state.totalQuantity = calculateTotalQuantity(action.payload.items);
//       })
//       .addCase(updateQuantity.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   }
// });

// export default cartSlice.reducer;


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Utility function to calculate total quantity
const calculateTotalQuantity = (items = []) => {
  return items.reduce((total, item) => total + (item.quantity || 0), 0);
};

// Base URL constant
const BASE_URL = 'http://localhost:3000/api';

// Error handler utility
const handleAsyncError = (error) => {
  const message = error.response?.data?.message || error.message || 'An error occurred';
  throw new Error(message);
};

// Async thunks for cart operations
export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/cart/${userId}`);
      return response.data;
    } catch (error) {
      return handleAsyncError(error);
    }
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ userId, product }) => {
    try {
      const response = await axios.post(`${BASE_URL}/cart/${userId}/add`, product);
      return response.data;
    } catch (error) {
      return handleAsyncError(error);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async ({ userId, productId }) => {
    try {
      const response = await axios.delete(`${BASE_URL}/cart/${userId}/remove/${productId}`);
      return response.data;
    } catch (error) {
      return handleAsyncError(error);
    }
  }
);

export const updateQuantity = createAsyncThunk(
  'cart/updateQuantity',
  async ({ userId, productId, type }) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/cart/${userId}/quantity/${productId}`,
        { type }
      );
      return response.data;
    } catch (error) {
      return handleAsyncError(error);
    }
  }
);

// Helper function to update state with cart data
const updateCartState = (state, action) => {
  state.loading = false;
  state.error = null;
  state.items = action.payload.items || [];
  state.totalAmount = action.payload.totalAmount || 0;
  state.totalQuantity = calculateTotalQuantity(action.payload.items);
};

// Helper function to handle pending state
const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

// Helper function to handle rejected state
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0,
    totalQuantity: 0,
    loading: false,
    error: null
  },
  reducers: {
    clearCartError: (state) => {
      state.error = null;
    },
    resetCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
      state.loading = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch Cart
      .addCase(fetchCart.pending, handlePending)
      .addCase(fetchCart.fulfilled, updateCartState)
      .addCase(fetchCart.rejected, handleRejected)
      
      // Add to Cart
      .addCase(addToCart.pending, handlePending)
      .addCase(addToCart.fulfilled, updateCartState)
      .addCase(addToCart.rejected, handleRejected)
      
      // Remove from Cart
      .addCase(removeFromCart.pending, handlePending)
      .addCase(removeFromCart.fulfilled, updateCartState)
      .addCase(removeFromCart.rejected, handleRejected)
      
      // Update Quantity
      .addCase(updateQuantity.pending, handlePending)
      .addCase(updateQuantity.fulfilled, updateCartState)
      .addCase(updateQuantity.rejected, handleRejected);
  }
});

export const { clearCartError, resetCart } = cartSlice.actions;
export default cartSlice.reducer;