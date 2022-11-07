import { getNextKeyDef } from "@testing-library/user-event/dist/keyboard/getNextKeyDef";
import React from "react";

import {
  BsFillSkipBackwardCircleFill,
  BsFillSkipEndCircleFill,
  BsPlayCircleFill,
  BsFillPauseCircleFill,
} from "react-icons/bs";

const Controls = (props) => {
  return (
    <div className="player-controls">
      <BsFillSkipEndCircleFill
        className="skip"
        onClick={() => {
          props.skip();
        }}
      />

      <BsPlayCircleFill
        className="play"
        onClick={() => {
          console.log(props);
          props.play(!props.playing);
        }}
      />
      <BsFillSkipBackwardCircleFill
        className="skip"
        onClick={() => {
          props.skip();
        }}
      />
    </div>
  );
};

export default Controls;
