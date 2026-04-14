
import { Box, Typography, Link, List, ListItem } from "@mui/material";

export default function Footer() {
  const gold = "#B8973C";

  return (
    <Box component="footer" sx={{ backgroundColor: "#1f1915", color: "#f3efe9", py: { xs: 6, md: 10 } }}>
      <Box sx={{ maxWidth: 1100, mx: "auto", px: { xs: 3, md: 4 } }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "2fr 1fr 1fr 1fr" }, gap: 6, mb: 6 }}>
          <Box>
            <Typography variant="h5" sx={{ color: gold, fontWeight: 700, mb: 2 }}>
              Tatvam Vastu
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(243,239,233,0.85)", mb: 3 }}>
              Transforming spaces through ancient wisdom and modern understanding. We help you create
              harmonious environments that support your aspirations and well-being.
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              {["f", "in", "tw", "ig"].map((s) => (
                <Box
                  key={s}
                  component="a"
                  href="#"
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    bgcolor: gold,
                    color: "#1f1915",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: 14,
                  }}
                >
                  {s}
                </Box>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ color: gold, fontWeight: 700, mb: 2 }}>
              Quick Links
            </Typography>
            <List sx={{ p: 0 }}>
              {[
                ["Home", "#"],
                ["About Us", "#about"],
                ["Services", "#services"],
                ["Contact", "#contact"],
              ].map((item) => (
                <ListItem key={item[0]} sx={{ p: 0, mb: 1 }}>
                  <Link href={String(item[1])} sx={{ color: "rgba(243,239,233,0.9)", textDecoration: "none" }}>
                    {item[0]}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: gold, fontWeight: 700, mb: 2 }}>
              Services
            </Typography>
            <List sx={{ p: 0 }}>
              {[
                ["Residential Vastu", "#"],
                ["Commercial Vastu", "#"],
                ["Industrial Vastu", "#"],
                ["Personalized Consultation", "#"],
              ].map((item) => (
                <ListItem key={item[0]} sx={{ p: 0, mb: 1 }}>
                  <Link href={String(item[1])} sx={{ color: "rgba(243,239,233,0.9)", textDecoration: "none" }}>
                    {item[0]}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ color: gold, fontWeight: 700, mb: 2 }}>
              Resources
            </Typography>
            <List sx={{ p: 0 }}>
              {[
                ["Vastu Education", "#"],
                ["Products", "#"],
                ["Testimonials", "#"],
                ["Blog", "#"],
              ].map((item) => (
                <ListItem key={item[0]} sx={{ p: 0, mb: 1 }}>
                  <Link href={String(item[1])} sx={{ color: "rgba(243,239,233,0.9)", textDecoration: "none" }}>
                    {item[0]}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>

        <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.04)", pt: 4 }}>
          <Typography variant="body2" sx={{ color: "rgba(243,239,233,0.75)" , textAlign: "center" ,fontSize: "20px"}}>
            © 2026 Tatvam Vastu. All rights reserved. | Designed with care for harmonious living
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
