import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      return { ...state, isOpen: true };
    },
    closeModal: (state) => {
      return { ...state, isOpen: false };
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
