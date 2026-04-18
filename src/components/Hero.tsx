import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import logo from "../assets/Logo_1.png";
import heroBg from "../assets/hero_1.jpeg";

/**
 * Hero section — matches the Tatvam Vastu design:
 * - Blueprint/architectural background image (with overlay)
 * - Centred logo mark
 * - Bold headline: "Aligning Spaces," in dark, "Elevating Lives" in gold
 * - Subtitle in light grey
 * - Two CTA buttons: solid gold "Get Consultation" + outlined "Explore Services"
 */

const LogoMark: React.FC<{ size?: number }> = ({ size = 80 }) => (
  <Box
    component="img"
    src={logo}
    alt="Tatvam Vastu logo"
    sx={{
      width: size,
      height: size,
      objectFit: "contain",
      display: "block",
    }}
  />
);

const Hero: React.FC = () => {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: "relative",
        height: { xs: "90vh", md: "100vh" },
        paddingTop: { xs: "64px", md: "72px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundImage: `url(${heroBg})`,
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
        <Box
          sx={{
            mb: { xs: 4, md: 5 },
            p: { xs: 2, md: 3 },
           // borderRadius: 3,
            bgcolor: "rgba(255,255,255,0.94)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.12)",
            border: "1px solid rgba(201,168,76,0.18)",
          }}
        >
          <LogoMark size={120} />
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