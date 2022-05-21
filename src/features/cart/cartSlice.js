import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 0,
  totalPrice: 0,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.filter((item) => item.id !== itemId);
      state.cartItems = cartItem;
    },
    increaseItem: (state, action) => {
      const itemID = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemID);
      cartItem.amount++;
    },
    decreaseItem: (state, action) => {
      const itemID = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemID);

      if (cartItem.amount === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== itemID);
      } else {
        cartItem.amount--;
      }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.totalPrice = total;
    },
  },
});

export const {
  clearCart,
  removeItem,
  increaseItem,
  decreaseItem,
  calculateTotals,
} = cartSlice.actions;
