import React from "react";
import { Box, Container, Typography } from "@mui/material";
import founderImage from "../assets/founder.jpeg";

const AboutUs: React.FC = () => {
  return (
    <Box id="about" sx={{ py: 10, backgroundColor: "#f8f6f2" }}>
      <Container maxWidth="lg">
        <Typography
          align="center"
          sx={{ letterSpacing: 2, color: "#B8973C", fontSize: "14px", mb: 1 }}
        >
          KNOW US
        </Typography>

        <Typography
          variant="h3"
          align="center"
          sx={{ fontFamily: "Playfair Display, serif", fontWeight: 600, mb: 2 }}
        >
          About Tatvam Vastu
        </Typography>

        {/* <Typography align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 900, mx: "auto" }}>
          With a deep understanding of ancient Vastu Shastra principles and their application in modern architecture, our founder has dedicated years to mastering this sacred science. Driven by a passion to help individuals and businesses create spaces that nurture growth, prosperity, and well-being, Tatvam Vastu bridges traditional wisdom and contemporary living.
        </Typography> */}

        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{ fontFamily: "Playfair Display, serif", fontWeight: 600, mb: 3 }}>
            Meet Our Founder
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "360px 1fr" },
              gap: 4,
              alignItems: "start",
            }}
          >
            <Box sx={{ borderRadius: 4, overflow: "hidden", border: "2px solid #B8973C" }}>
              <Box
                component="img"
                src={founderImage}
                alt="Founder"
                sx={{ width: "100%", height: { xs: 320, md: 420 }, objectFit: "cover", display: "block" }}
              />
            </Box>

            <Box>
              <Typography sx={{ color: "#B8973C", fontWeight: 600, mb: 1 }}>Founder & CEO, Tatvam Vastu</Typography>
              <Typography sx={{ mb: 2, color: "text.secondary" }}>
                With a deep understanding of ancient Vastu Shastra principles and their application in modern architecture, our founder has dedicated years to mastering this sacred science.
              </Typography>

              <Typography sx={{ mb: 2, color: "text.secondary" }}>
                Driven by a passion to help individuals and businesses create spaces that nurture growth, prosperity, and well-being, Tatvam Vastu was established to bridge the gap between traditional wisdom and contemporary living.
              </Typography>

              <Typography sx={{ color: "text.secondary" }}>
                Our approach combines rigorous analysis, authentic Vastu principles, and practical solutions that respect both the science and your unique circumstances.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Three stats row: desktop in a single row, mobile stacked */}
        <Box sx={{ mt: 8 }}>
          <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" } }}>
            <Box sx={{ textAlign: "center", py: 4, backgroundColor: "#fff", borderRadius: 3, border: "1px solid transparent" }}>
              <Typography sx={{ fontSize: { xs: 40, md: 48 }, fontWeight: 700, color: "#B8973C" }}>98%</Typography>
              <Typography sx={{ letterSpacing: 1.5, mt: 1, color: "text.secondary" }}>SUCCESS RATE</Typography>
            </Box>

            <Box sx={{ textAlign: "center", py: 4, backgroundColor: "#fff", borderRadius: 3, border: "1px solid transparent" }}>
              <Typography sx={{ fontSize: { xs: 40, md: 48 }, fontWeight: 700, color: "#B8973C" }}>4.9</Typography>
              <Typography sx={{ letterSpacing: 1.5, mt: 1, color: "text.secondary" }}>CLIENT RATING</Typography>
            </Box>

            <Box sx={{ textAlign: "center", py: 4, backgroundColor: "#fff", borderRadius: 3, border: "1px solid transparent" }}>
              <Typography sx={{ fontSize: { xs: 40, md: 48 }, fontWeight: 700, color: "#B8973C" }}>10+</Typography>
              <Typography sx={{ letterSpacing: 1.5, mt: 1, color: "text.secondary" }}>YEARS EXPERIENCE</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
