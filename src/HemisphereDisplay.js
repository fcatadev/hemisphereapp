import React from "react";
import "./Hemisphere.css";
import northernPic from "./image/NorthernHemisphere.png";
import southernPic from "./image/SouthernHemisphere.jpg";

const hemisphereConfig = {
  Northern: {
    text: "it is northern hemisphere",
    picture: northernPic,
  },
  Southern: {
    text: "it is southern hemisphere",
    picture: southernPic,
  },
};

const HemisphereDisplay = ({ latitude }) => {
  // Ternary operator=> latitude 0 dan büyükse (?: durum doğruysa demek) string ifade (: değilse demek) string ifade şeklinde kullanılır.
  const hemisphere = latitude > 0 ? "Northern" : "Southern";
  const { text, picture } = hemisphereConfig[hemisphere];

  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt="" />
        </div>
        <div className="ui teal bottom attached label">
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default HemisphereDisplay;
