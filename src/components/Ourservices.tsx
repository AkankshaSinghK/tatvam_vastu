import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        border: "2px solid #B8973C",
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        
      }}
    >
      {/* Top Pattern Area */}
      <Box
        sx={{
          height: 200,
          position: "relative",
          background: "linear-gradient(180deg, #d9e7f2 0%, #ffffff 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          // The Grid Pattern (matching your image)
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            opacity: 0.2,
            backgroundImage: `linear-gradient(#4d5b6b 2px, transparent 2px), 
                              linear-gradient(90deg, #4d5b6b 2px, transparent 2px)`,
            backgroundSize: "45px 45px", // Size of the squares
            backgroundPosition: "center center",
          },
        }}
      >
        {/* Optional: You can place an icon here if needed */}
      </Box>

      {/* Content Area */}
      <Box sx={{ p: 4, pt: 2 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
            fontSize: "1.75rem",
            mb: 2,
            color: "#1a1a1a",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "#666",
            lineHeight: 1.6,
            fontSize: "1.1rem",
            mb: 3,
          }}
        >
          {description}
        </Typography>
        <Link
          href="#"
          sx={{
            color: "#B8973C",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "1.1rem",
            display: "inline-flex",
            alignItems: "center",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Learn More →
        </Link>
      </Box>
    </Box>
  );
};

const OurServices: React.FC = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#f8f6f2" }}>
      <Container maxWidth="lg">
        <Typography
          align="center"
          sx={{
            letterSpacing: 2,
            color: "#B8973C",
            fontSize: "18px",
            fontWeight: 600,
            mb: 1,
          }}
        >
          WHAT WE OFFER
        </Typography>

        <Typography
          align="center"
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: { xs: "32px", md: "48px" },
            fontWeight: 500,
            mb: 2,
          }}
        >
          Our Services
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          sx={{ mb: 8, fontSize: "1.2rem", maxWidth: "700px", mx: "auto" }}
        >
          Comprehensive Vastu solutions for every aspect of your life and space
        </Typography>

        <Box sx={{ display: "grid", gap: 4, gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" } }}>
          <Box>
            <ServiceCard
              title="Commercial & Office Vastu"
              description="Optimize your business environment for success. Our commercial Vastu services enhance productivity and attract prosperity to your workplace."
            />
          </Box>
          <Box>
            <ServiceCard
              title="Residential Vastu"
              description="Harmonize your home with tailored Vastu recommendations for comfort, health, and prosperity."
            />
          </Box>
          <Box>
            <ServiceCard
              title="Design Integration"
              description="We integrate Vastu into modern architectural and interior design without compromising aesthetics."
            />
          </Box>
           <Box>
            <ServiceCard
              title="Design Integration"
              description="We integrate Vastu into modern architectural and interior design without compromising aesthetics."
            />
          </Box>
          {/* Add more cards as needed */}
        </Box>
      </Container>
    </Box>
  );
};

export default OurServices;