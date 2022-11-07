
import React, { useEffect, useState } from "react";
import MusicPlay from "./component/MusicPlay.jsx";
import BlackMp3 from './component/black.mp3'
import Puppets from './component/Puppets.mp3'
import Ferg from './component/Fergilicsious.mp3'
import Add from "./component/Add.jsx"
   

function App() {
    
  const [myData, setMyData] = useState([{
    artist: "No Artist",
    song_title: "No title",
    album_cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3_37zqWx87C6nm7XOlmwLLhJrOfv5ijyATzIZEmPS&s",
    mp3_fileLink: BlackMp3
  }])
  const [song, setSong] = useState([{song:BlackMp3},{song:Puppets},{song:Ferg}])
   const [currentSong, setCurrentSong] = useState(0)

  
  // useEffect(() => {
  // }, []);
  
  useEffect(() => {
    fetch("http://localhost:8000/songs")
      .then((data) => data.json())
      .then((data) => { 
       return setMyData(data)
      });
    // setCurrentSong(() => {
    //   if (currentSong + 1 > song.length - 1) {
    //       return 0
    //   } else {
    //     return currentSong + 1
    //     }
    //   })
  }, [])


  let makeCurrentSong = (newSong) => {
    setCurrentSong(newSong)
  }

  return (
    <>
 
    <div>
        <Add/>
    </div>
    <div className="App">
     
      
        <MusicPlay currentSong={currentSong} setCurrentSong={makeCurrentSong} song={song} setData={myData} />
      
      
      
      </div>
      </>
  );
   

}

export default App;
