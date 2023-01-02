import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "item",
  initialState: {
    showMenuDrawer: false,
    showCartDrawer: false,
    showSuccessSnackbar: false,
    showFailureSnackbar: false,
  },
  reducers: {
    toggleMenuDrawer(state) {
      state.showMenuDrawer = !state.showMenuDrawer;
    },
    toggleCartDrawer(state) {
      state.showCartDrawer = !state.showCartDrawer;
    },
    showSuccessSnackbar(state) {
      state.showSuccessSnackbar = true;
    },
    hideSuccessSnackbar(state) {
      state.showSuccessSnackbar = false;
    },
    showFailureSnackbar(state) {
      state.showFailureSnackbar = true;
    },
    hideFailureSnackbar(state) {
      state.showFailureSnackbar = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
