import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const getTarget = state.find((ele) => ele.id === action.payload.id);
      if (getTarget) {
        getTarget.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      let getTarget = state.find((ele) => ele.id === action.payload.id);
      getTarget.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      let getTarget = state.find((ele) => ele.id === action.payload.id);
      getTarget.quantity -= 1;
    },

    removeFromCart: (state, action) => {
      return state.filter((ele) => {
        return ele.id !== action.payload;
      });
    },
    clearCart: () => {
      return [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
