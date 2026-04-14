import React from "react";
import { Box, Container, Typography } from "@mui/material";

const cards = [
  {
    title: "Benefits of Vastu",
    text: "Vastu-compliant spaces promote mental peace, physical health, financial growth, and harmonious relationships with improved concentration and productivity.",
  },
  {
    title: "Common Vastu Remedies",
    text: "Simple remedies like proper furniture placement, color corrections, strategic use of mirrors, plants, and crystals can significantly improve energy flow.",
  },
  {
    title: "Design + Vastu",
    text: "We integrate Vastu principles into modern interiors so aesthetics and energy balance coexist without compromise.",
  },
  {
    title: "Consultation Process",
    text: "A step-by-step process: site analysis, personalized plan, implementation guidance and follow-up to ensure lasting results.",
  },
];

const LearnMore: React.FC = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Typography align="center" sx={{ letterSpacing: 2, color: "#B8973C", fontSize: "14px", mb: 1 }}>
          LEARN MORE
        </Typography>

        <Typography
          variant="h2"
          align="center"
          sx={{ fontFamily: "Playfair Display, serif", fontWeight: 700, mb: 2, fontSize: { xs: 36, md: 48 } }}
        >
          Understanding Vastu Shastra
        </Typography>

        <Typography align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 900, mx: "auto" }}>
          Ancient wisdom for modern living — discover the science behind harmonious spaces and how small changes unlock lasting benefits.
        </Typography>

        <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" } }}>
          {cards.map((c, i) => (
            <Box
              key={i}
              sx={{
                background: "#fff",
                borderRadius: 3,
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                borderLeft: "4px solid #B8973C",
                p: { xs: 4, md: 5 },
                minHeight: 140,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontFamily: "Playfair Display, serif", fontSize: 22, fontWeight: 700, mb: 1 }}>{c.title}</Typography>
              <Typography color="text.secondary">{c.text}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default LearnMore;
