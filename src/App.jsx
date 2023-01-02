import ButtonAppBar from "./layout/AppBar";
import ItemsGrid from "./components/Items/ItemsGrid";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import Snackbars from "./components/Snackbars/Snackbars";

function App() {
  const theme = useTheme();

  return (
    <div className="App">
      <ButtonAppBar position="fixed" />
      <Box sx={{ mt: `${theme.mixins.toolbar.minHeight + 16}px` }}>
        <ItemsGrid />
      </Box>
      <Snackbars />
    </div>
  );
}

export default App;
