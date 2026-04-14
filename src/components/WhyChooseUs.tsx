import React from "react";
import { Box, Container, Typography } from "@mui/material";

type Feature = {
  title: string;
  description: string;
  image?: string;
};

const features: Feature[] = [
  {
    title: "Authentic Vastu Guidance",
    description:
      "Get expert consultation rooted in traditional Vastu principles with modern understanding.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Personalized Solutions",
    description:
      "Every recommendation is tailored to your space, lifestyle, and specific needs.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Years of Expertise",
    description:
      "Benefit from deep knowledge and years of hands-on experience in Vastu consultation.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Holistic Approach",
    description:
      "We focus on balancing energy, harmony, and well-being for long-term results.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
  },
];

interface FeatureCardProps {
  title: string;
  description: string;
  image?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        border: "2px solid #B8973C",
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Top Pattern Section */}
      <Box
        sx={{
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: 2,
    backgroundColor: "#fff", // clean white background
  }}
>
       {image && (
    <Box
      component="img"
      src={image}
      alt={title}
      sx={{
        width: "90%",
        height: "90%",
        objectFit: "cover",
        borderRadius: 2,
      }}
    />
  )}
      </Box>

      {/* Content */}
      <Box sx={{ p: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 600,
            mb: 1,
            textAlign: "center",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: "#666",
            fontSize: "1rem",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

const WhyChooseUs: React.FC = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#f8f6f2" }}>
      <Container maxWidth="lg">
        {/* Subtitle */}
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
          OUR PROMISE
        </Typography>

        {/* Title */}
        <Typography
          align="center"
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: { xs: "32px", md: "48px" },
            fontWeight: 500,
            mb: 2,
          }}
        >
          Why Choose Us
        </Typography>

        {/* Description */}
        <Typography
          align="center"
          color="text.secondary"
          sx={{ mb: 8, fontSize: "1.2rem", maxWidth: "700px", mx: "auto" }}
        >
          Experience the transformative power of authentic Vastu consultation
          backed by years of expertise and dedication
        </Typography>

        {/* Grid */}
        <Box
          sx={{
            display: "grid",
            gap: 4,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr",
              md: "repeat(2, 1fr)",
            },
          }}
        >
          {features.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;