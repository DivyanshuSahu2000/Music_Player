import React, { useContext } from "react";
import { FaSpotify } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Link } from "react-router";
import Card from "./Card";
import { AppContext } from "../context/songContext";
import SongBar from "./SongBar";

const RightSection = () => {
  const { DATA } = useContext(AppContext);

  return (
    <div className="right-section">
      <div className="right-top">
        <div>
          <MdNavigateBefore className="navigate" size={23} />
          <MdNavigateNext className="navigate" size={23} />
          <GiHamburgerMenu
            className="hamburger"
            onClick={() => {
              document.querySelector(".side-bar").style.left = "0%";
            }}
          />
        </div>
        <div className="passion-one-black spotify">
          <FaSpotify color="rgb(20, 155, 71)" /> <span>Spotify Playlist</span>
        </div>
        <div>
          <Link to="/signup">
            <button className="sign-btn">Sign Up</button>
          </Link>
          <Link to="/login">
            <button className="login-btn">Log in</button>
          </Link>
        </div>
      </div>

      <div className="passion-one-black spotify-responsive">
        <FaSpotify color="rgb(20, 155, 71)" /> <span>Spotify Playlist</span>
      </div>

      <div className="card-container">
        {DATA.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      <div
        className="div-songbar"
        // style={{ height: "14%", position: "relative", top: "3%" }}
      >
        <SongBar />
      </div>
    </div>
  );
};

export default RightSection;
