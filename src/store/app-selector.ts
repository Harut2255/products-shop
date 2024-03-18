import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './index';

export const productsSelector = (state: RootState) => state.products;
export const ordersSelector = (state: RootState) => state.orders;
