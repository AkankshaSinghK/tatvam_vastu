import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

/**
 * Hero section — matches the Tatvam Vastu design:
 * - Blueprint/architectural background image (with overlay)
 * - Centred logo mark
 * - Bold headline: "Aligning Spaces," in dark, "Elevating Lives" in gold
 * - Subtitle in light grey
 * - Two CTA buttons: solid gold "Get Consultation" + outlined "Explore Services"
 */

const LogoMark: React.FC<{ size?: number }> = ({ size = 80 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="40,6 74,68 6,68" fill="none" stroke="#C9A84C" strokeWidth="2.5" />
    <polygon points="40,22 60,58 20,58" fill="#C9A84C" opacity="0.25" />
    <line x1="40" y1="6" x2="40" y2="68" stroke="#C9A84C" strokeWidth="1.6" />
    <text
      x="50%"
      y="78"
      textAnchor="middle"
      fontSize="7"
      fill="#C9A84C"
      fontFamily="'Cormorant Garamond', serif"
      letterSpacing="1.5"
    >
      TATVAM VASTU
    </text>
  </svg>
);

const Hero: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "100svh", md: "92vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        // Blueprint background — uses a public Unsplash architectural drawing image.
        // Replace `backgroundImage` URL with your own asset in production.
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Warm white overlay — gives the washed-out blueprint feel */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(245,241,232,0.82) 0%, rgba(240,236,224,0.78) 100%)",
          zIndex: 1,
        }}
      />

      <Container
        maxWidth="sm"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          px: { xs: 3, sm: 4 },
          py: { xs: 8, md: 6 },
        }}
      >
        {/* Logo mark */}
        <Box sx={{ mb: { xs: 3, md: 4 } }}>
          <LogoMark size={80} />
        </Box>

        {/* Headline */}
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: { xs: "38px", sm: "52px", md: "60px" },
            lineHeight: 1.15,
            color: "#1A1A1A",
            mb: 0,
          }}
        >
          Aligning Spaces,
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: { xs: "38px", sm: "52px", md: "60px" },
            lineHeight: 1.15,
            color: "#C9A84C",
            mb: { xs: 2.5, md: 3 },
          }}
        >
          Elevating Lives
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            letterSpacing: "0.5px",
            color: "#5A5A5A",
            mb: { xs: 5, md: 6 },
            maxWidth: 420,
          }}
        >
          Is your space aligned with your true potential?
        </Typography>

        {/* CTA Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
            maxWidth: 420,
          }}
        >
          {/* Primary — solid gold */}
          <Button
            variant="contained"
            fullWidth
            href="#contact"
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: { xs: "16px", md: "18px" },
              letterSpacing: "2px",
              textTransform: "uppercase",
              background: "#C9A84C",
              color: "#fff",
              py: { xs: 1.6, md: 1.8 },
              borderRadius: "4px",
              boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "#B8973C",
                boxShadow: "0 6px 28px rgba(201,168,76,0.5)",
                transform: "translateY(-1px)",
              },
            }}
          >
            Get Consultation
          </Button>

          {/* Secondary — outlined */}
          <Button
            variant="outlined"
            fullWidth
            href="#services"
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: { xs: "16px", md: "18px" },
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#C9A84C",
              borderColor: "#C9A84C",
              backgroundColor: "rgba(255,255,255,0.75)",
              py: { xs: 1.6, md: 1.8 },
              borderRadius: "4px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(201,168,76,0.08)",
                borderColor: "#B8973C",
                color: "#B8973C",
                transform: "translateY(-1px)",
              },
            }}
          >
            Explore Services
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;