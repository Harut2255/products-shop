import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../types';

type AppState = {
  products: Product[];
  selected_product?: Product
}

const initialState: AppState = {
    products: [],
    selected_product: {
        id: '',
        title: '',
        description: '',
        imageUrl: '',
        count: 0,
        price: 0
    }
};

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(' http://localhost:3000/products');
      return await res.json();
    } catch (e) {
      return rejectWithValue('Something');
    }
  }
);

export const getProductById = createAsyncThunk(
    'products/getProductById',
    async (id: number, { rejectWithValue }) => {
      try {
        const res = await fetch(`http://localhost:3000/products/${id}`);
        return await res.json();
      } catch (e) {
        return rejectWithValue('Something');
      }
    }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
        console.log(action.payload)
        state.selected_product = action.payload;
    });
  }
});

export const {
} = productsSlice.actions;

export default productsSlice.reducer;
