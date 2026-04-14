import React from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/Ourservices";
import LearnMore from "./components/LearnMore";
import OurOfferings from "./components/OurOfferings";
import OurClients from "./components/OurClients";
import GetInTouch from "./components/GetInTouch";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

// ── MUI Theme ──────────────────────────────────────────────
const theme = createTheme({
  palette: {
    primary: {
      main: "#C9A84C",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#5A5A5A",
    },
    background: {
      default: "#FAFAF6",
    },
  },
  typography: {
    fontFamily: "'Cormorant Garamond', 'Georgia', serif",
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: false },
      styleOverrides: {
        root: { borderRadius: 4 },
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <OurServices />
      <AboutUs />
      <LearnMore />
      <OurOfferings />
      <OurClients />
      <GetInTouch />
      <ContactForm />
      <Footer />
    
    </ThemeProvider>
  );
};

export default App;