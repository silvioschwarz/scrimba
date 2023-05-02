import React from "react";

export default function Joke(props) {
  return (
    <div>
      {props.setup &&<h3>{props.setup}</h3>}
      <p>Punchline: {props.punchline}</p>
      <hr />
    </div>
  );
}
