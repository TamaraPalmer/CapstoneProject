import React from "react";

import "./Footer.scss";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{ bgcolor: "primary.main", color: "white", p: 4 }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Contact Us </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              sx={{ mr: 1 }}
              color="inherit"
              href="mailto:example@example.com"
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              sx={{ mr: 1 }}
              color="inherit"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Typography variant="body2" sx={{ flexGrow: 1 }}>
            &copy; {currentYear} DiscoverUs. All Rights Reserved.
          </Typography>
          <Typography variant="body2" sx={{ ml: 2 }}>
            Made with{" DiscoverUs"}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            by Fyiah
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;

