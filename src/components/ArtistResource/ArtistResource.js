import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import collaborate from "../../assets/images/collaborate.jpg";
import listen from "../../assets/images/listen.jpg";
import music from "../../assets/images/music.jpg";
import AppleMusic from "../../assets/images/Applemusic.jpeg";
import Tidal from "../../assets/images/Tidal.png";

const cards = [
  {
    title:
      "TuneCore Partners With Gritty in Pink to Support Inpink Talent Hub Alongside Live Nation, Melissa Etheridge & More",
    description:
      "TuneCore Partners With Gritty In Pink to Support INPINK Talent Hub Alongside Live Nation, Melissa Etheridge & More TuneCore follows up its groundbreaking study, BE THE CHANGE: Gender Equality in the Music Industry, now in its third year, with this important partnershipThe INPINK talent hub provides a centralized resource for the music industry to hire […]",
    image: collaborate,
  },
  {
    title:
      "TikTok Sensation Charlotte Sands Joins Believe Family As Latest Artist in “Signed By” Program",
    description:
      "Launched in June by TuneCore and our parent company Believe, the “Signed By” program has benefited over 340 artists around the world.  That means artists who release their music through TuneCore and are identified as rising stars are eligible to be signed by industry-leading digital music distribution and artist development company, Believe.   We’re thrilled to […]",
    image: listen,
  },
  {
    title: "Unlimited Guides: Release Planning 101",
    description:
      "TuneCore went Unlimited to give independent artists worldwide total creative freedom and limitless opportunities with every release. Your fans want unlimited new music, and we’re here to set you up for success as you navigate the distribution process– from start to finish– across the world’s most popular Digital Stores & Social Platforms.  Social media giants",
    image: music,
  },
  {
    title: "Apple Music for Artists X TuneCore Rewards",
    description:
      "TuneCore Rewards is the only rewards program in music that delivers tailored advice from industry experts to help you excel in your career. Now we’re taking it to the next level by teaming up with Apple Music to bring you our latest master class series: Apple Music for Artists. Led by Apple Music Artist Relations […]",
    image: AppleMusic,
  },
  {
    title: "Tidal Artist Payout",
    description:
      "Fans on TIDAL can support and empower their favorite artists more than ever, simply by listening. TIDAL has unveiled a brand-new, direct-to-artist payment feature: the Direct Artist Payouts program. Direct Artist Payouts is a groundbreaking way for fans to directly support their top-streamed artists through their TIDAL HiFi Plus membership every month. Up to 10% […]",
    image: Tidal,
  },
];

const ArtistResources = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {cards.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={card.image}
                alt=""
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Link href="https://www.tunecore.com/blog">
                    Read more on TuneCore Blog
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ArtistResources;
