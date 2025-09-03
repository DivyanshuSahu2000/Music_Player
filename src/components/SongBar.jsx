import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/songContext";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const SongBar = () => {
  const { DATA, audio, currentSong, setCurrentSong, isPlaying, setIsPlaying } =
    useContext(AppContext);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const updateDuration = () => setDuration(audio.duration || 0);
    const updateTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, [audio]);
  const togglePlay = () => setIsPlaying(!isPlaying);
  // };

  const currentIndex = DATA.findIndex((song) => song.id === currentSong.id);

  const previousSong = () => {
    const newIndex = (currentIndex - 1 + DATA.length) % DATA.length;
    setCurrentSong(DATA[newIndex]);
    setIsPlaying(true);
  };

  const nextSong = () => {
    const newIndex = (currentIndex + 1) % DATA.length;
    setCurrentSong(DATA[newIndex]);
    setIsPlaying(true);
  };
  const handleSeek = (e) => {
    const newTime = e.target.value;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  return (
    <div className="songBar">
      <div className="songBar-top">
        <div className="song-name"> {currentSong.song}</div>
        <div className="playbar-btn">
          <MdNavigateBefore size={35} onClick={previousSong} />
          {isPlaying ? (
            <FaPauseCircle size={35} onClick={togglePlay} />
          ) : (
            <FaPlayCircle size={35} onClick={togglePlay} />
          )}
          <MdNavigateNext size={35} onClick={nextSong} />
        </div>
        <div className="song-duration">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
      <input
        className="seekBar"
        type="range"
        min={0}
        max={duration || 0}
        value={currentTime}
        onChange={handleSeek}
        style={{
          background: `linear-gradient(
            to right, 
            rgb(14, 139, 62) ${(currentTime / duration) * 100}%, 
rgb(33, 87, 60) ${(currentTime / duration) * 100}%
          )`,
        }}
      />
    </div>
  );
};

export default SongBar;
