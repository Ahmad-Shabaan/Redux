import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./services/productsSlice";
import cartSReducer from "./features/cartSlice";
import templatesReducer from "./features/templatesSlcie";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    carts: cartSReducer,
    templates: templatesReducer,
  },
});
