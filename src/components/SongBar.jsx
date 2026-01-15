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
    if (!audio) return;

    const updateDuration = () => setDuration(audio.duration || 0);
    const updateTime = () => setCurrentTime(audio.currentTime || 0);

    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, [audio]);

  const togglePlay = () => {
    if (!currentSong) return;
    setIsPlaying((prev) => !prev);
  };

  const currentIndex = currentSong
    ? DATA.findIndex((song) => song.id === currentSong.id)
    : 0;

  const previousSong = () => {
    if (!DATA.length) return;
    const newIndex = (currentIndex - 1 + DATA.length) % DATA.length;
    setCurrentSong(DATA[newIndex]);
    setIsPlaying(true);
  };

  const nextSong = () => {
    if (!DATA.length) return;
    const newIndex = (currentIndex + 1) % DATA.length;
    setCurrentSong(DATA[newIndex]);
    setIsPlaying(true);
  };

  const handleSeek = (e) => {
    const newTime = Number(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time = 0) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  return (
    <div className="songBar">
      <div className="songBar-top">
        <div
          className=" song-name "
          title={currentSong?.fullTitle || currentSong?.song}
        >
          {currentSong ? currentSong.song : currentIndex[0]}
        </div>

        <div className="playbar-btn">
          <MdNavigateBefore
            size={35}
            onClick={previousSong}
            className="f-btn"
          />

          {isPlaying ? (
            <FaPauseCircle size={35} onClick={togglePlay} className="f-btn" />
          ) : (
            <FaPlayCircle size={35} onClick={togglePlay} className="f-btn" />
          )}

          <MdNavigateNext size={35} onClick={nextSong} className="f-btn" />
        </div>

        <div className="song-duration">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>

      <input
        className="seekBar"
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        onChange={handleSeek}
        style={{
          background: `linear-gradient(
            to right,
            rgb(14, 139, 62) ${progress}%,
            rgb(33, 87, 60) ${progress}%
          )`,
        }}
      />
    </div>
  );
};

export default SongBar;
