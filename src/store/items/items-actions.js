import { itemsActions } from "./items-slice.js";

const itemsUrl = "https://fakestoreapi.com/products";

export const fetchItems = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(itemsUrl);

      if (!response.ok) {
        throw new Error("Could not fetch items data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const itemsData = await fetchData();
      dispatch(itemsActions.setItems(itemsData));
    } catch (error) {
      //SHOW ERROR SNACKBAR
    }
  };
};
