import {useState, useEffect} from "react";
import Player from "./components/Player";
import './index.css';

function App() {
   const[songs] = useState([
    {
      title: "Capable God",
      artist: "Judikay",
      img: "./images/Judikay.jpg",
      src: "./musics/Judikay.mp3"
    },

    {
        title: "Cheer Up",
        artist: "Onel mala",
        img: "./images/Onel.jpg",
        src: "./musics/CHEER UP.mp3"
    },

    {
      title: "I testify",
      artist: "ADA",
      img: "https://www.lacoccinelle.net/1182882-3121.jpg?20191117",
      src: "./musics/ADA_I_TESTIFY.mp3"
    },

    {
      title: "Na you dey",
      artist: "Mercy Chinwo",
      img: "./images/mercy.jpg",
      src: "./musics/Na You dey.mp3"
    },

    {
      title: "Oza mosantu",
      artist: " Past Moise-Mbiye",
      img: "./images/moise.jpg",
      src: "./musics/Oza mosantu.mp3"
    },

  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);


  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > songs.length - 1) {
        return 0;
      }
      return currentSongIndex + 1;
    });
  }, [currentSongIndex,songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
