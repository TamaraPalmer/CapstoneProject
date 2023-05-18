import "./Home.scss";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import hero from "../assets/images/hero.jpg";
import bottom from "../assets/images/bottom.jpg";
import BrowseArtist from "../components/BrowseArtist/BrowseArtist";
import Upload from "../components/Upload/Upload";
import ArtistResource from "../components/ArtistResource/ArtistResource";

const Home = () => {
  return (
    <div className="home">
      <img className="home__img-top" src={hero} alt="" />
      <div className="home__hero">
        <Typography
          variant="h4"
          sx={{ fontFamily: "Arial", color: "white", mb: 2 }}
        >
          Unleash Music's Hidden Gems with DiscoverUs
        </Typography>
        <Typography variant="h7" component="p">
          <div
            className="button-wrapper"
            style={{ display: "flex", gap: "52px", flexDirection: "row" }}
          >
            <Link to="/browse">
              <button className="home__button">Listen</button>
            </Link>
            <Link to="/signup">
              <button className="home__button">Find out more </button>
            </Link>
          </div>
        </Typography>
      </div>
      <div className="home__artist">
        <Upload />
        <BrowseArtist />
      </div>
      <div className="home__closing">
        <Typography
          variant="h5"
          sx={{ fontFamily: "Arial", color: "white", mb: 1, margin: "10px" }}
        >
          Thanks for listening. Now Sign Up. Scout for emerging artist,
          collaborate and build your playlists. All for free.
        </Typography>
        <Link to="/browse">
          <button className="home__button">Scout</button>
        </Link>
      </div>
      <ArtistResource />
      <img className="home__img-bottom" src={bottom} alt="producers" />
    </div>
  );
};

export default Home;
