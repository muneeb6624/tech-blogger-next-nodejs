import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './slice/blogSlice';
import dealReducer from './slice/dealSlice'

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    deals: dealReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
