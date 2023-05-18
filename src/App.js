import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Browse from "./pages/Browse/Browse";
import ArtistProfile from "./pages/ArtistProfile/ArtistProfile";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import SignUp from "./pages/Authentication/ArtistSubmissionForm.js/SignUp";
import Login from "./pages/Authentication/Login";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/artist/:idFromParams" element={<ArtistProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
//browse artist ,user dash board links between pages inside components,//
/// element would chnage to home  the playlist would be inside dashboard
// home,browse (artist,song componets imported)artist(song components),dashboard(user name , profile image,bio,embedd playlist) , aritst profile- song should only link to artist profile
// Scout profile dashbaord fake profile pic playlist
