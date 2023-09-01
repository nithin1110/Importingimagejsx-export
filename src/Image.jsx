import React from "react";

function Image(props) {
  return (
    <div>
      <h1>{props.name1}</h1>
      <img src={props.img1} alt={props.name1} />
      <h1>{props.name2}</h1>
      <img src={props.img2} alt={props.name2} />
      <h1
        style={{
          display: "block",
          margin: "0 auto",
          textAlign: "center"
        }}
      >
        {props.name2}
      </h1>
      <img
        src={props.img2}
        alt={props.name2}
        style={{
          display: "block", // To center the image
          margin: "0 auto", // To center the image
          backgroundColor: "red"
        }}
      />
    </div>
  );
}

export default Image;
