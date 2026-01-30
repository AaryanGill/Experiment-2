import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(90deg, #667eea, #764ba2)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
        }}
      >
        <Toolbar>
          {/* Logo / Title */}
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: "bold", letterSpacing: 1 }}
          >
            MyUI
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button sx={navBtnStyle}>Home</Button>
            <Button sx={navBtnStyle}>About</Button>
            <Button sx={navBtnStyle}>Services</Button>
            <Button sx={navBtnStyle}>Contact</Button>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton color="inherit" onClick={handleOpenMenu}>
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleCloseMenu}>Home</MenuItem>
              <MenuItem onClick={handleCloseMenu}>About</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Services</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Contact</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Page Content */}
      <Box sx={{ padding: 4 }}>
  <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
    Welcome
  </Typography>

  <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 600 }}>
    This application demonstrates a clean, responsive navigation bar built
    using Material UI components, designed for modern professional interfaces.
  </Typography>
</Box>
    </>
  );
}

/* Button styling */
const navBtnStyle = {
  color: "#fff",
  marginLeft: 2,
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.2)"
  }
};

export default App;
