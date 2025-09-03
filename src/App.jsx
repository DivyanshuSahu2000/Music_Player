import { useContext, useEffect, useState } from "react";
import RightSection from "./components/RightSection";
import Sidebar from "./components/Sidebar";
import { AppContext } from "./context/songContext";

function App() {
  const { audio, currentSong, isPlaying } = useContext(AppContext);

  useEffect(() => {
    if (!currentSong) return;

    audio.src = currentSong.track;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [currentSong, isPlaying, audio]);

  return (
    <>
      <div className="Container">
        <Sidebar />
        <RightSection />
      </div>
    </>
  );
}

export default App;
