import React from "react";
import { Box } from "@mui/material";

const CenteredBox = (props) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      {props.children}
    </Box>
  );
};

export default CenteredBox;
