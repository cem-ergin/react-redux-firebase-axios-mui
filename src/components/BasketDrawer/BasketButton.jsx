import React from "react";
import { Button, Drawer, Paper } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui/ui-slice";
import Cart from "./Cart";

export default function BasketButton() {
  const cartSelector = useSelector((state) => state.cart);
  const uiSelector = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  function toggleCartDrawer() {
    return dispatch(uiActions.toggleCartDrawer());
  }

  return (
    <div>
      <Drawer
        open={uiSelector.showCartDrawer}
        anchor="right"
        onClose={toggleCartDrawer}
      >
        <Paper elevation={3} style={{ width: "350px" }}>
          <Cart />
        </Paper>
      </Drawer>
      <Button variant="contained" color="secondary" onClick={toggleCartDrawer}>
        <ShoppingCartIcon />
        <span>{cartSelector.items.length}</span>
      </Button>
    </div>
  );
}
