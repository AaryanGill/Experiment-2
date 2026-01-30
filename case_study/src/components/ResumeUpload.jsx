import { Card, CardContent, Typography, Button } from "@mui/material";
import { Container } from "react-bootstrap";

function ResumeUpload() {
  return (
    <Container className="my-5">
      <Card sx={{ maxWidth: 600, mx: "auto" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom fontWeight={600}>
            Upload Resume
          </Typography>

          <Typography variant="body2" color="text.secondary" gutterBottom>
            Upload your resume in PDF or DOCX format for analysis.
          </Typography>

          <input
            type="file"
            className="form-control my-3"
          />

          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#0f172a",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#020617"
              }
            }}
          >
            Analyze Resume
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ResumeUpload;
