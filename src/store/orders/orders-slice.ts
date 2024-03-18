import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Order } from '../../types';

type AppState = {
    orders: Order[];
}

const initialState: AppState = {
    orders: [],
};

export const getOrders = createAsyncThunk(
    'orders/getOrders',
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch('http://localhost:3000/orders');
            return await res.json();
        } catch (e) {
            return rejectWithValue('Something');
        }
    }
);

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOrders.fulfilled, (state, action) => {
            state.orders = action.payload;
        });
    }
});

export const {
} = ordersSlice.actions;

export default ordersSlice.reducer;
