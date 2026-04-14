import React from "react";
import { Box, Container, Typography } from "@mui/material";

const testimonials = [
  {
    quote:
      "After implementing the Vastu recommendations from Tatvam Vastu, we noticed remarkable improvements in our family's health and financial situation. The consultation was thorough and the solutions were practical.",
    name: "Rajesh Sharma",
    role: "Businessman, Ludhiana",
    initials: "RS",
  },
  {
    quote:
      "Tatvam Vastu helped us reorganize our home and the atmosphere changed — calmer, more productive, and happier. Highly recommended.",
    name: "Anita Verma",
    role: "Interior Designer, Delhi",
    initials: "AV",
  },
  {
    quote:
      "Professional and insightful. Their remedies were simple to implement and truly effective for our office layout.",
    name: "Sameer Khan",
    role: "Entrepreneur, Mumbai",
    initials: "SK",
  },
];

const OurClients: React.FC = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#fff" }}>
      <Container maxWidth="md">
        <Typography align="center" sx={{ letterSpacing: 2, color: "#B8973C", fontSize: "14px", mb: 1 }}>
          TESTIMONIALS
        </Typography>

        <Typography variant="h3" align="center" sx={{ fontFamily: "Playfair Display, serif", fontWeight: 700, mb: 4 }}>
          What Our Clients Say
        </Typography>

        <Box sx={{ display: "grid", gap: 4, gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" } }}>
          {testimonials.map((t, i) => (
            <Box key={i} sx={{ background: "#f8f6f2", borderRadius: 3, p: 4, minHeight: 220, display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
              <Typography sx={{ fontStyle: "italic", color: "#4a4a4a", lineHeight: 1.7 }}>
                “{t.quote}”
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 3 }}>
                <Box sx={{ width: 44, height: 44, borderRadius: "50%", background: "#B8973C", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
                  {t.initials}
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700 }}>{t.name}</Typography>
                  <Typography sx={{ color: "text.secondary", fontSize: 14 }}>{t.role}</Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default OurClients;
