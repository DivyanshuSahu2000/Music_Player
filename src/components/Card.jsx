import React, { useContext, useState } from "react";
import { FaHeart, FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { IoMdMusicalNote } from "react-icons/io";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { RiSpeakFill } from "react-icons/ri";
import { GiMusicalScore } from "react-icons/gi";
import { PiNotePencilBold } from "react-icons/pi";
import { AppContext } from "../context/songContext";

const Card = ({ item }) => {
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

  const [heart, setHeart] = useState(false);

  return (
    <div className="card">
      <img className="card-img-top" src={item.image} alt={item.song} />
      {heart ? (
        <FaHeart className="heart2" onClick={() => setHeart(false)} />
      ) : (
        <FaHeart className="heart" onClick={() => setHeart(true)} />
      )}

      {isThisPlaying ? (
        <FaPauseCircle className="card-play" onClick={togglePlay} size={40} />
      ) : (
        <FaPlayCircle className="card-play" onClick={togglePlay} size={40} />
      )}

      <div className="card-body">
        <p className="card-text">
          <IoMdMusicalNote />
          {item.song}
        </p>
        <p className="card-text">
          <BsFillMusicPlayerFill />
          {item.album}
        </p>
        <p className="card-text">
          <RiSpeakFill />
          {item.singer}
        </p>
        <p className="card-text">
          <PiNotePencilBold />
          {item.lyrics}
        </p>
        <p className="card-text">
          <GiMusicalScore />
          {item.music}
        </p>
      </div>
    </div>
  );
};

export default Card;
