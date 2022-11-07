import React, { useState, useRef, useEffect } from "react";
import Controls from "./Controls";

const MusicPlay = (props) => {
  const audio = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (playing) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  });
  const Next = (newSong = true) => {
    if (newSong && props.currentSong < props.song.length - 1) {
      props.setCurrentSong(props.currentSong + 1);

      //   let file = props.currentSong;
      //   file++;
      //   if (file > props.song.length) {
      //     file = 0;
    } else {
      props.setCurrentSong(0);
    }
  };

  return (
    <div className="player">
      <audio src={props.song[props.currentSong].song} ref={audio}></audio>
      <h2>Playing</h2>
      <h3>{props.setData[props.currentSong].artist}</h3>
      <h2>{props.setData[props.currentSong].song_title}</h2>
      <div>
        <img src={props.setData[props.currentSong].album_cover}></img>

        <Controls play={setPlaying} skip={Next} playing={playing} />
      </div>
    </div>
  );
};

export default MusicPlay;
