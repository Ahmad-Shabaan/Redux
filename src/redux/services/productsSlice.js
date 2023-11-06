import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  }
);

const productsSlice = createSlice({
  initialState: { products: [], status: "idle", error: null },
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = "succeeded";
    });

    builder.addCase(fetchProducts.pending, (state, action) => {
      //
      state.status = "loading";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      //
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
