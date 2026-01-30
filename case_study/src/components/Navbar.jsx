import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box
} from "@mui/material";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        background: "#0f172a",
        boxShadow: "none"
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: 600 }}
        >
          ResumeAI
        </Typography>

        <Box>
          <Button sx={btnStyle}>Home</Button>
          <Button sx={btnStyle}>Analyze</Button>
          <Button sx={btnStyle}>Features</Button>
          <Button sx={btnStyle}>Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

const btnStyle = {
  color: "#e5e7eb",
  textTransform: "none",
  marginLeft: 2,
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.1)"
  }
};

export default Navbar;
