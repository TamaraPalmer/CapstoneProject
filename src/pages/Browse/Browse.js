import BrowseArtist from "../../components/BrowseArtist/BrowseArtist";
import Typography from "@mui/material/Typography";
import browse from "../../assets/images/browse.jpg";
import browseBottom from "../../assets/images/browsebottom.jpg";
import "./Browse.scss";

function Browse() {
  return (
    <div className="browse">
      <img className="browse__img-top" src={browse} alt="" />
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 4,
          color: "white",
        }}
      >
        Discover New Music from Unsigned Artists
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 4,
          color: "white",
        }}
      >
        Browse our vast collection of albums and playlists with ease. Simply
        scroll and click on the album art to play/pause the song. Connect with
        your favorite artists by clicking on their name to go to their profile
        page.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          mb: 4,
          fontWeight: "bold",
          color: "white",
        }}
      >
        Benefits of Our Music Service:
      </Typography>
      <ul>
        <Typography
          component="li"
          variant="body1"
          sx={{ fontFamily: "Arial", color: "white", mb: 2 }}
        >
          Discover talented, unsigned artists across a variety of genres
        </Typography>
        <Typography
          component="li"
          variant="body1"
          sx={{ fontFamily: "Arial", color: "white", mb: 2 }}
        >
          Create custom playlists to fit the mood and vibe of your projects
        </Typography>
        <Typography
          component="li"
          variant="body1"
          sx={{ fontFamily: "Arial", color: "white", mb: 2 }}
        >
          Stay up-to-date with the latest releases from your favorite artists
          and potential collaborators
        </Typography>
        <Typography
          component="li"
          variant="body1"
          sx={{ fontFamily: "Arial", color: "white", mb: 2 }}
        >
          Collaborate with emerging talent to bring your projects to life and
          explore new creative directions
        </Typography>
      </ul>
      <BrowseArtist />
      <img className="browse__img-bottom" src={browseBottom} alt="playlist" />
    </div>
  );
}

export default Browse;
