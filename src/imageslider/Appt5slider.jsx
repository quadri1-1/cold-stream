import React from 'react'
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const slideImage = [
  {
    url: "https://photos.zillowstatic.com/fp/ded9096c3d80de010437b5babaac72b5-cc_ft_384.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/ceebf509039bcc397ce0ac1c4bfc44cc-cc_ft_768.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/44ec93e2ce5b559f92b6db4b4ceb314e-cc_ft_768.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/6dbd8e9f6aba8333d97e1980eef552c1-cc_ft_384.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/1bb33c45849debfc3c00a5eaf5896bd7-cc_ft_768.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/dd9e3f166b2e0a5bc1a4dadd70708071-cc_ft_768.webp",
    caption: "first slide",
    },
   {
    url: " https://photos.zillowstatic.com/fp/81304d5285c813d09ac1156a7e948263-cc_ft_384.webp",
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

const Appt5slider = () => {
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

export default Appt5slider