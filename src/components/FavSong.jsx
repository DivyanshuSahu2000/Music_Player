import React, { useContext } from "react";
import { AppContext } from "../context/songContext";

const FavSong = ({ item }) => {
  const { audio, currentSong, setCurrentSong, isPlaying, setIsPlaying } =
    useContext(AppContext);

  const isThisPlaying = isPlaying && currentSong.id === item.id;

  const togglePlay = () => {
    if (isThisPlaying) {
      setIsPlaying(false);
    } else {
      setCurrentSong(item);
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <li
        className={isThisPlaying ? "fav" : ""}
        style={{ cursor: "pointer" }}
        onClick={togglePlay}
      >
        {item.song}
      </li>
    </div>
  );
};

export default FavSong;
