import { categoryActions } from "./category-slice";

const categoriesUrl = "https://fakestoreapi.com/products/categories";

export const fetchCategories = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(categoriesUrl);

      if (!response.ok) {
        throw new Error("Could not fetch categories!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const categoriesData = await fetchData();
      dispatch(categoryActions.setCategories(categoriesData));
    } catch (error) {
      //SHOW ERROR SNACKBAR
    }
  };
};
