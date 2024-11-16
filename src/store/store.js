import { configureStore } from '@reduxjs/toolkit';
import cooperationReducer from '../slices/cooperationSlice';

export const store = configureStore({
  reducer: {
    cooperation: cooperationReducer,  // Mengatur slice 'cooperation' yang menggunakan cooperationReducer
  },
});