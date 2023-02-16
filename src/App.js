import React, { useState } from "react";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";
import image6 from "./image6.jpg";
import image7 from "./image7.jpg";
import image8 from "./image8.jpg";
import image9 from "./image9.jpg";
import image10 from "./image10.jpg";

import "./App.css";

function App() {
  const [image, setImage] = useState(image1);

  function updateImage(img) {
    return setImage(img);
  }
  return (
    <div className="container">
      <div className="main-container container">
        <div className="inner-container">
          <div className="img-slider">
            <div>
              <img src={image} alt="" className="temp-box"></img>
              <div>+add background</div>
            </div>
            <div className="update-button">
              <img
                src={image1}
                alt=""
                onClick={() => updateImage(image1)}
                width={"50px"}
                height={"25px"}
              ></img>
              <img
                src={image2}
                alt=""
                onClick={() => updateImage(image2)}
                width="50px"
                height="25px"
              ></img>
              <img
                src={image3}
                alt=""
                onClick={() => updateImage(image3)}
                width={"50px"}
                height={"25px"}
              ></img>
              <img
                src={image4}
                alt=""
                onClick={() => updateImage(image4)}
                width={"50px"}
                height={"25px"}
              ></img>
              <img
                src={image5}
                alt=""
                onClick={() => updateImage(image5)}
                width={"50px"}
                height={"25px"}
              ></img>
               <img
                src={image6}
                alt=""
                onClick={() => updateImage(image6)}
                width={"50px"}
                height={"25px"}
              ></img>
               <img
                src={image7}
                alt=""
                onClick={() => updateImage(image7)}
                width={"50px"}
                height={"25px"}
              ></img>
               <img
                src={image8}
                alt=""
                onClick={() => updateImage(image8)}
                width={"50px"}
                height={"25px"}
              ></img>
               <img
                src={image9}
                alt=""
                onClick={() => updateImage(image9)}
                width={"50px"}
                height={"25px"}
              ></img>
               <img
                src={image10}
                alt=""
                onClick={() => updateImage(image10)}
                width={"50px"}
                height={"25px"}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
