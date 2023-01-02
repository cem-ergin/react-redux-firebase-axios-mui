import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cart-slice.js";
import categorySlice from "./categories/category-slice.js";
import itemsSlice from "./items/items-slice.js";
import uiSlice from "./ui/ui-slice.js";

const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    ui: uiSlice.reducer,
    categories: categorySlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
