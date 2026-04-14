import React, { useState } from "react";
import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";

const services = [
  "Consultation",
  "Home Vastu",
  "Office Vastu",
  "Remedies",
  "Other",
];

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(services[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { fullName, email, phone, service, message };
    // TODO: wire to real API / endpoint
    // for now just log and show a simple confirmation
    // eslint-disable-next-line no-console
    console.log("Contact form submitted:", payload);
    alert("Message sent — we'll get back to you soon.");
    setFullName("");
    setEmail("");
    setPhone("");
    setService(services[0]);
    setMessage("");
  };

  return (
    <Box
      component="section"
      sx={{
        maxWidth: 900,
        mx: "auto",
        my: { xs: 6, md: 10 },
        p: { xs: 3, md: 6 },
        backgroundColor: "#fff",
        borderRadius: 2,
        boxShadow: "0 6px 18px rgba(20,20,20,0.06)",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
        Send Us A Message
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
        Fill out the form below and we'll contact you about your request.
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: "grid", gap: 2 }}>
        <TextField
          label="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          fullWidth
        />

        <Box sx={{ display: { xs: "block", md: "grid" }, gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <TextField
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            fullWidth
          />
        </Box>

        <TextField
          select
          label="Service Interest"
          value={service}
          onChange={(e) => setService(e.target.value)}
          fullWidth
        >
          {services.map((s) => (
            <MenuItem key={s} value={s}>
              {s}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          multiline
          rows={5}
          required
          fullWidth
        />

        <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 1 }}>
          <Button type="submit" variant="contained" color="primary" sx={{ px: 4, py: 1.5 }}>
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
