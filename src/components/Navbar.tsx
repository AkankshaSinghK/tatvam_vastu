import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Inline SVG logo matching the triangular Tatvam Vastu mark
const LogoMark: React.FC<{ size?: number }> = ({ size = 42 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="30,5 55,50 5,50" fill="none" stroke="#C9A84C" strokeWidth="2.2" />
    <polygon points="30,18 45,44 15,44" fill="#C9A84C" opacity="0.3" />
    <line x1="30" y1="5" x2="30" y2="50" stroke="#C9A84C" strokeWidth="1.4" />
  </svg>
);

const NAV_LINKS = ["Home", "About", "Services", "Blog", "Contact"];

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const drawerPaperProps: any = {
    sx: {
      width: 270,
      background: "#FAFAF6",
      borderLeft: "1px solid rgba(201,168,76,0.2)",
    },
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "rgba(255, 255, 255, 0.96)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(201, 168, 76, 0.25)",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: { xs: 64, md: 72 },
            px: { xs: 2.5, md: 6 },
          }}
        >
          {/* Brand */}
          <Box
            component="a"
            href="/"
            sx={{ display: "flex", alignItems: "center", gap: 1.5, textDecoration: "none" }}
          >
            <LogoMark size={isMobile ? 34 : 42} />
            <Typography
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: { xs: "17px", md: "21px" },
                letterSpacing: { xs: "3px", md: "5px" },
                color: "#C9A84C",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              Tatvam Vastu
            </Typography>
          </Box>

          {/* Desktop Links */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 4.5 }}>
              {NAV_LINKS.map((link) => (
                <Typography
                  key={link}
                  component="a"
                  href="#"
                  sx={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "14px",
                    letterSpacing: "2px",
                    color: "#3A3A3A",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    position: "relative",
                    transition: "color 0.25s",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -3,
                      left: 0,
                      width: 0,
                      height: "1.5px",
                      background: "#C9A84C",
                      transition: "width 0.3s ease",
                    },
                    "&:hover": { color: "#C9A84C" },
                    "&:hover::after": { width: "100%" },
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Box>
          )}

          {/* Hamburger */}
          {isMobile && (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ color: "#3A3A3A", p: 1 }}
              aria-label="Open menu"
            >
              <MenuIcon sx={{ fontSize: 28 }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)} {...({ PaperProps: drawerPaperProps } as any)}>
        <Box
          sx={{
            px: 3,
            pt: 3,
            pb: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LogoMark size={30} />
            <Typography
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "15px",
                letterSpacing: "3px",
                color: "#C9A84C",
              }}
            >
              TATVAM VASTU
            </Typography>
          </Box>
          <IconButton onClick={() => setDrawerOpen(false)} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
            mx: 2,
            mb: 1,
          }}
        />

        <List sx={{ px: 1, pt: 1 }}>
          {NAV_LINKS.map((link) => (
            <ListItem
              key={link}
              component="a"
              href="#"
              onClick={() => setDrawerOpen(false)}
              sx={{
                py: 1.5,
                px: 2,
                borderRadius: 1,
                mb: 0.5,
                textDecoration: "none",
                "&:hover": { backgroundColor: "rgba(201,168,76,0.08)" },
              }}
            >
              <ListItemText
                primary={
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "17px",
                      letterSpacing: "2.5px",
                      textTransform: "uppercase",
                      color: "#3A3A3A",
                    }}
                  >
                    {link}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Spacer to push content below fixed AppBar */}
      <Toolbar sx={{ minHeight: { xs: 64, md: 72 } }} />
    </>
  );
};

export default Navbar;