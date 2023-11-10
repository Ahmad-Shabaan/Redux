import { configureStore } from "@reduxjs/toolkit";
import templatesReducer from "./services/templatesSlice";
import templateReducer from './services/templateSlice'
export const store = configureStore({
  reducer: {
    templates: templatesReducer,
    template : templateReducer,
  },
});
