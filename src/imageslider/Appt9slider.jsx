import React from 'react'
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const slideImage = [
  {
    url: "https://photos.zillowstatic.com/fp/539379ec3f9d1f288ba530c290753a8a-cc_ft_384.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/0e1a754c25ca93c25aa92d0a0a6e2042-cc_ft_384.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/ca1b12e5085a3b705db7ed34c807bd78-cc_ft_384.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/479157ebb142c634e800875e4329f537-cc_ft_384.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/555f1d67ba48f2f07c5c8875f06a747d-cc_ft_384.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/0d88cc734eb20e3dea88b886fc334f38-cc_ft_384.webp",
    caption: "first slide",
    },
   {
    url: " https://photos.zillowstatic.com/fp/695cee946e810ac454ef4d1f41917b13-cc_ft_768.webp",
    caption: "first slide",
    },
 
];
const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "200px",
  width: "200px",
  backgroundSize: "cover",
};

const Appt9slider = () => {
  return (
    <div className="slide-container container">
      <Slide>
        {slideImage.map((image, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${image.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default Appt9slider