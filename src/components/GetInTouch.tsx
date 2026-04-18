import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";

const GetInTouch: React.FC = () => {
  return (
    <Box id="getintouch" sx={{ py: 10, backgroundColor: "#fff" }}>
      <Container maxWidth="md">
        <Typography align="center" sx={{ letterSpacing: 2, color: "#B8973C", fontSize: "18px", fontWeight: 600, mb: 1 }}>
          LET'S CONNECT
        </Typography>

        <Typography variant="h3" align="center" sx={{ fontFamily: "Playfair Display, serif", fontWeight: 700, mb: 2 }}>
          Let's Connect
        </Typography>

        <Typography align="center" color="text.secondary" sx={{ mb: 6 ,fontSize: "1.2rem"}}>
          Ready to transform your space? Reach out for a consultation
        </Typography>

        <Typography variant="h4" sx={{ fontFamily: "Playfair Display, serif", fontWeight: 700, mb: 3 }}>
          Contact Information
        </Typography>

        <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" } }}>
          <Box sx={{ display: "flex", gap: 3, alignItems: "flex-start" }}>
            <Box sx={{ width: 56, height: 56, borderRadius: "50%", background: "#B8973C", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700 }}>
              📍
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700 }}>Address</Typography>
              <Typography sx={{ color: "text.secondary" }}>House No. 79, Luxmi Puri Salem Tabri, Ludhiana, Punjab - 141008</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 3, alignItems: "flex-start" }}>
            <Box sx={{ width: 56, height: 56, borderRadius: "50%", background: "#B8973C", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700 }}>
              📞
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700 }}>Phone</Typography>
              <Link href="tel:+919872792745" sx={{ color: "#B8973C", display: "block" }}>+91 9872792745</Link>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 3, alignItems: "flex-start" }}>
            <Box sx={{ width: 56, height: 56, borderRadius: "50%", background: "#B8973C", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700 }}>
              ✉️
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700 }}>Email</Typography>
              <Link href="mailto:info@tatvamvastu.com" sx={{ color: "#B8973C", display: "block" }}>info@tatvamvastu.com</Link>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 3, alignItems: "flex-start" }}>
            <Box sx={{ width: 56, height: 56, borderRadius: "50%", background: "#B8973C", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700 }}>
              ⏰
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700 }}>Business Hours</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                <div>Monday - Saturday: 9:00 AM - 7:00 PM</div>
                <div>Sunday: By Appointment</div>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default GetInTouch;
