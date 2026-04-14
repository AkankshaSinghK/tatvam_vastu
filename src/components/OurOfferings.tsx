import React from "react";
import { Box, Container, Typography } from "@mui/material";

const products = [
  {
    title: "Vastu Consultation",
    price: "₹4,999",
    text: "Detailed on-site consultation and actionable plan tailored to your space.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Vastu E-Book",
    price: "₹999",
    text: "Comprehensive guide to Vastu principles and practical remedies.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Online Workshop",
    price: "₹2,499",
    text: "Interactive workshop to learn fundamental Vastu concepts and applications.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Design Integration",
    price: "Custom",
    text: "Vastu-aligned design consultation integrated with your architect/interior.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80",
  },
];

const OurOfferings: React.FC = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#f8f6f2" }}>
      <Container maxWidth="lg">
        <Typography align="center" sx={{ letterSpacing: 2, color: "#B8973C", fontSize: "14px", mb: 1 }}>
          OUR OFFERINGS
        </Typography>

        <Typography variant="h2" align="center" sx={{ fontFamily: "Playfair Display, serif", fontWeight: 700, mb: 2, fontSize: { xs: 32, md: 44 } }}>
          Vastu Products & Services
        </Typography>

        <Typography align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 900, mx: "auto" }}>
          Enhance your space with our carefully curated Vastu products and service packages.
        </Typography>

        <Box sx={{ display: "grid", gap: 4, gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" } }}>
          {products.map((p, i) => (
            <Box key={i} sx={{ background: "#fff", borderRadius: 3, overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.04)" }}>
              {/* image/top area */}
              <Box sx={{ height: 180, background: "linear-gradient(180deg,#e9d7b6 0%, #f3ecdf 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box component="img" src={p.image} alt={p.title} sx={{ width: "60%", height: "80%", objectFit: "cover", borderRadius: 2 }} />
              </Box>

              {/* content */}
              <Box sx={{ p: 4 }}>
                <Typography sx={{ fontFamily: "Playfair Display, serif", fontSize: 20, fontWeight: 700 }}>{p.title}</Typography>
                <Typography sx={{ color: "#B8973C", fontWeight: 700, mt: 1 }}>{p.price}</Typography>
                <Typography sx={{ color: "text.secondary", mt: 2 }}>{p.text}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default OurOfferings;
