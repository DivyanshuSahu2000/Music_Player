import React, { useContext } from "react";
import { MdLibraryMusic } from "react-icons/md";
import { AppContext } from "../context/songContext";
import FavSong from "./FavSong";

const YourLib = () => {
  const { DATA } = useContext(AppContext);
  return (
    <>
      <div className="your-lib">
        <MdLibraryMusic />
        <span>Your Library</span>
        <ul>
          {DATA.map((item) => (
            <FavSong key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default YourLib;
