import e from "cors";
import React, { useState } from "react";

const Add = () => {
  const [input, setInput] = useState({
    artist: "",
    song_title: "",
    album_cover: "",
    mp3_fileLink: "",
  });

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
    console.log(input);
    return input;
    console.log("value is:", event.target.value);
  };

  return (
    <form>
      <h2>add your music</h2>
      <input
        value={input.artist}
        name="artist"
        onChange={handleChange}
        className="newSong"
      ></input>
      <input
        value={input.song_title}
        name="song_title"
        onChange={handleChange}
        className="newSong"
      ></input>
      <input
        value={input.album_cover}
        name="album_cover"
        onChange={handleChange}
      ></input>
      <input
        value={input.mp3_filelink}
        name="mp3_filelink"
        onChange={handleChange}
        className="newSong"
      ></input>
      <button
        onClick={() => {
          fetch("http://localhost:8000/songs", {
            method: "POST",
            mode: "cors",

            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
          });
        }}
      >
        Add
      </button>
    </form>
  );
};

export default Add;
