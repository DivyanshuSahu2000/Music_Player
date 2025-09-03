import React from "react";
import { FaSpotify } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { MdClear } from "react-icons/md";
import Footer from "./Footer.jsx";
import YourLib from "./YourLib.jsx";

const Sidebar = () => {
  return (
    <div className="side-bar passion-one-bold">
      <div className="sidebar-top-sec">
        <ul>
          <li>
            <FaSpotify size={20} color="rgb(20, 155, 71)" />
            <span>Spotify</span>
            <MdClear
              className="remove"
              size={25}
              onClick={() => {
                document.querySelector(".side-bar").style.left = "-300%";
              }}
            />
          </li>
          <li>
            <GoHomeFill size={25} />
            <span>Home</span>
          </li>
          <li>
            <IoSearch size={25} />
            <span>Search</span>
          </li>
        </ul>
      </div>
      <YourLib />
      <Footer />
    </div>
  );
};

export default Sidebar;
