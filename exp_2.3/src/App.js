import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  TextField
} from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm" style={{ marginTop: "40px" }}>
      <Card elevation={4}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Material UI Form
          </Typography>

          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "16px" }}
          >
            Submit
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
