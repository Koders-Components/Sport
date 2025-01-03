import React from "react";
import { Parallax } from "react-parallax";

const App = () => {
  return (
    <div>
      {/* Parallax Section */}
      <Parallax
        bgImage="/item/img/Groundimg.png"
        bgImageAlt="background"
        strength={200} // Determines the parallax intensity
      >
        <div style={{ height: 500 }}>
          <h1 style={{ textAlign: "center", paddingTop: "200px", color: "white" }}>
            Parallax Effect
          </h1>
        </div>
      </Parallax>

      {/* Regular Content */}
      <Parallax
        bgImage="/item/img/Groundimg.png"
        bgImageAlt="bgimgha"
        strength={500}
      >
        <div style={{ height:5000}}>
          <p>Scroll down to see the parallax effect in action!</p>
        </div>
      </Parallax>
    </div>
  );
};

export default App;