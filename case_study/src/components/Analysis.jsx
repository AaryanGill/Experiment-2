import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Chip,
  Box
} from "@mui/material";

import { Container, Row, Col } from "react-bootstrap";

function Analysis() {
  const score = 92;

  const skills = [
    "React",
    "JavaScript",
    "Python",
    "SQL",
    "Machine Learning",
    "Git"
  ];

  return (
    <Container className="mb-5">
      <Row className="g-4">
        {/* ATS SCORE */}
        <Col md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                ATS Resume Score
              </Typography>

              <Typography variant="h4" fontWeight={700}>
                {score}%
              </Typography>

              <LinearProgress
                variant="determinate"
                value={score}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  mt: 2,
                  backgroundColor: "#e5e7eb",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#2563eb"
                  }
                }}
              />

              <Typography
                variant="body2"
                color="text.secondary"
                mt={2}
              >
                This score represents how well your resume matches
                standard ATS requirements.
              </Typography>
            </CardContent>
          </Card>
        </Col>

        {/* SKILLS TAGS */}
        <Col md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Identified Skills
              </Typography>

              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    variant="outlined"
                    sx={{
                      fontWeight: 500,
                      borderColor: "#2563eb",
                      color: "#2563eb"
                    }}
                  />
                ))}
              </Box>

              <Typography
                variant="body2"
                color="text.secondary"
                mt={2}
              >
                Skills extracted from your resume content.
              </Typography>
            </CardContent>
          </Card>
        </Col>

        {/* RESUME PREVIEW */}
        <Col md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Resume Preview
              </Typography>

              <Box
                sx={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 1,
                  padding: 2,
                  height: 180,
                  overflowY: "auto",
                  backgroundColor: "#f9fafb"
                }}
              >
                <Typography variant="body2">
                  <strong>Name:</strong> Aaryan Gill <br />
                  <strong>Email:</strong> aaryan.gill@email.com <br />
                  <strong>Experience:</strong> 2+ Years <br />
                  <strong>Role:</strong> Frontend Developer <br /><br />
                  Experienced React developer with strong knowledge of
                  JavaScript, UI development, and modern frontend tools.
                </Typography>
              </Box>

              <Typography
                variant="body2"
                color="text.secondary"
                mt={2}
              >
                Parsed preview of uploaded resume.
              </Typography>
            </CardContent>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Analysis;
