import { Typography, Container } from "@mui/material";

function Hero() {
  return (
    <div className="bg-light py-5">
      <Container>
        <Typography variant="h3" fontWeight={600} gutterBottom>
          AI-Based Resume Analyzer
        </Typography>

        <Typography variant="body1" color="text.secondary" maxWidth={700}>
          Upload your resume to receive structured insights, skill evaluation,
          and professional recommendations using modern AI-driven analysis.
        </Typography>
      </Container>
    </div>
  );
}

export default Hero;
