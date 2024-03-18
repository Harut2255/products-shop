import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import ProductsReducer from './products/products-slice';
import OrdersReducer from './orders/orders-slice';

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    orders: OrdersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
