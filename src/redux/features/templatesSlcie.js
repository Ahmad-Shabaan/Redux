import { createSlice } from "@reduxjs/toolkit";


// you can consider  this like fetch data from api

const initialState = JSON.parse(localStorage.getItem("templates")) || [
  {
    HeroSection: { title: "", subTitle: "", description: "" },
    AboutSection: { title: "", subTitle: "", description: "" },
    ProductsSection: {
      title: "Gabrielle Essence Eau De Parfum",
      subTitle: "",
      description:
        "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
      price: 149.99,
    },
    Testimonials: { title: "", subTitle: "", description: "" },
    Features: { title: "", subTitle: "", description: "" },
  },
];



const templatesSlice = createSlice({
  initialState,
  name: "templatesSlice",
  reducers: {
    changeTitle: (state, action) => {
      let target = state[action.payload.templateNum].ProductsSection;
      if (action.payload.title === "") {
        target.title =
          initialState[action.payload.templateNum].ProductsSection.title;
      } else {
        target.title = action.payload.title;
      }
    },
    changeDescription: (state, action) => {
      let target = state[action.payload.templateNum].ProductsSection;
      if (action.payload.description === "") {
        target.description =
          initialState[action.payload.templateNum].ProductsSection.description;
      } else {
        target.description = action.payload.description;
      }
    },
    changePrice: (state, action) => {
      let target = state[action.payload.templateNum].ProductsSection;
      if (action.payload.price === "") {
        target.price =
          initialState[action.payload.templateNum].ProductsSection.price;
      } else {
        target.price = action.payload.price;
      }
    },
  },
});
export const { changeTitle, changeDescription, changePrice } =
  templatesSlice.actions;
export default templatesSlice.reducer;
