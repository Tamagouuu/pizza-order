import { AppBar, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pizza Shop
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
