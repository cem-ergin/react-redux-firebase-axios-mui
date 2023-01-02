import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/categories/category-actions";
import {
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Paper,
  Drawer,
} from "@mui/material";

const MenuDrawer = () => {
  const dispatch = useDispatch();
  const showMenuDrawer = useSelector((state) => state.ui.showMenuDrawer);

  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Drawer open={showMenuDrawer}>
      <Paper elevation={3} style={{ width: "250px" }}>
        <Typography align="center">Categories</Typography>
        <Divider></Divider>
        {categories && (
          <List>
            {categories.map((category) => (
              <ListItem key={category} button>
                <ListItemText primary={category} />;
              </ListItem>
            ))}
          </List>
        )}
        {!categories && <CircularProgress sx={{ margin: "3rem" }} />}
      </Paper>
    </Drawer>
  );
};

export default MenuDrawer;
