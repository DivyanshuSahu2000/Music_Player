import React, { useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [audio] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState();

  const DATA = [
    {
      id: 1,
      image: "images/Humnava_Mere.jpg",
      song: "Humnava Mere",
      album: "Humnava Mere",
      singer: "Jubin Nautiyal",
      lyrics: "Manoj Muntashir",
      music: "Rocky-Shiv",
      track: "songs/Humnava Mere.mp3",
    },
    {
      id: 2,
      image: "images/Hamari Adhuri Kahani.jpg",
      song: "Hamari Adhuri Kahani",
      album: "Hamari Adhuri Kahani",
      singer: "Arijit Singh",
      lyrics: "Rashmi & Virag",
      music: "Jeet Ganguli",
      track: "songs/Hamari Adhuri Kahani.mp3",
    },

    {
      id: 3,
      image: "images/Hasi Ban Gye.jpg",
      song: "Hasi Ban Gye",
      album: "Hamari Adhuri Kahani",
      singer: "Ami Mishra",
      lyrics: "Ami Mishra",
      music: "Kunaal Verma",
      track: "songs/Hasi Ban Gaye.mp3",
    },
    {
      id: 4,
      image: "images/Tum Hi Ho.jpg",
      song: "Tum Hi Ho",
      album: "Ashiqui 2",
      singer: "Arijit Singh",
      lyrics: "Mithoon",
      music: "Mithoon",
      track: "songs/Tum Hi Ho.mp3",
    },
    {
      id: 5,
      image: "images/Filhall.jpg",
      song: "Filhall",
      album: "Filhall",
      singer: "B Praak",
      lyrics: "Jaani",
      music: "Jaani",
      track: "songs/Filhall.mp3",
    },
    {
      id: 6,
      image: "images/Fillhall 2.jpg",
      song: "Filhall 2",
      album: "Filhall",
      singer: "B Praak",
      lyrics: "Jaani",
      music: "Jaani",
      track: "songs/Filhaal 2.mp3",
    },
    {
      id: 7,
      image: "images/Ishq Jaisa Kuch.jpg",
      song: "Ishq Jaisa Kuch",
      album: "Fighter",
      singer: "Vishal, Sekhar & shilpa Rao",
      lyrics: "Kumaar & Mellow D",
      music: "Vishal & Sekhar",
      track: "songs/Ishq Jaisa Kuch.mp3",
    },
    {
      id: 8,
      image: "images/Phir Aur Kya Chahiye.jpg",
      song: "Phir Aur Kya Chahiye",
      album: "Zara Hatke Zara Bachke",
      singer: "Arijit Singh & Sachin-Jigar",
      lyrics: "Amitabh Bhattacharya",
      music: "Sachin-Jigar",
      track: "songs/Phir Aur Kya Chahiye.mp3",
    },
    {
      id: 9,
      image: "images/Pehle Bhi Main.jpg",
      song: "Pehle Bhi Main",
      album: "Animal",
      singer: "Vishal Mishra",
      lyrics: "Raj Shekhar",
      music: "Vishal Mishra",
      track: "songs/Pehle Bhi Main.mp3",
    },
    {
      id: 10,
      image: "images/Tumhe Kitna Pyaar Karte.jpg",
      song: "Tumhe Kitna Pyar Karte",
      album: "Bawal",
      singer: "Arijit Singh",
      lyrics: "Manoj Muntashir",
      music: "Mithoon",
      track: "songs/Tumhe Kitna Pyaar Karte.mp3",
    },
    {
      id: 11,
      image: "images/Husn.jpg",
      song: "Husn",
      album: "Husn",
      singer: "Anuv Jain",
      lyrics: "Anuv Jain",
      music: "Angad Bahra",
      track: "songs/Husn.mp3",
    },
    {
      id: 12,
      image: "images/Chaleya.jpg",
      song: "Chaleya",
      album: "Jawan",
      singer: "Arijit Singh & Shilpa Rao",
      lyrics: "Kumaar",
      music: "Kumaar",
      track: "songs/Chaleya.mp3",
    },
    {
      id: 13,
      image: "images/Akhiyaan Gulaab.jpg",
      song: "Akhiyaan Gulaab",
      album: "Teri Baaton Me Uljha Jiya",
      singer: "Mitraz",
      lyrics: "Mitraz",
      music: "Mitraz",
      track: "songs/Akhiyaan Gulaab.mp3",
    },
    {
      id: 14,
      image: "images/Dil.jpg",
      song: "Dil",
      album: "Ek Villain Return",
      singer: "Raghav Chaitanya",
      lyrics: "Kunaal Verma",
      music: "Kaushak-Guddu",
      track: "songs/Dil.mp3",
    },
    {
      id: 15,
      image: "images/Raat Akeli Thi.jpg",
      song: "Raat Akeli Thi",
      album: "Marry Christmas",
      singer: "Arijit Singh & Antra Mishra",
      lyrics: "Varun Grover",
      music: "Pritam",
      track: "songs/Raat Akeli Thi.mp3",
    },
    {
      id: 16,
      image: "images/Kesariya.jpg",
      song: "Kesariya",
      album: "Brahmastra",
      singer: "Arijit Singh",
      lyrics: "Amitabh Bhattacharya",
      music: "Ptitam",
      track: "songs/Kesariya.mp3",
    },
  ];
  const [currentSong, setCurrentSong] = useState(DATA[0]);
  return (
    <>
      <AppContext.Provider
        value={{
          DATA,
          audio,
          currentSong,
          setCurrentSong,
          isPlaying,
          setIsPlaying,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};
export { AppContext, AppProvider };
