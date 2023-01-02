import React from "react";
import CardItem from "./CardItem";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../store/items/items-actions";
import CircularProgress from "@mui/material/CircularProgress";

const ItemsGrid = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{ m: "0.5rem" }}
    >
      {(!items || items.length === 0) && (
        <CircularProgress sx={{ margin: "3rem" }} />
      )}
      {items.map((item) => (
        <CardItem
          key={item.id}
          id={item.id}  
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
        >
          xs=4
        </CardItem>
      ))}
    </Grid>
  );
};

export default ItemsGrid;
