import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { openModal } from '../modal/modalSlice';

const url = 'https://course-api.com/react-useReducer-cart-projects';

const initialState = {
  cartItems: [],
  amount: 0,
  totalPrice: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk(
  'cart/getCart',
  async (name, thunkAPI) => {
    try {
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal());
      const response = await axios(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something fishy is going on');
    }
  }
);

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
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
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
