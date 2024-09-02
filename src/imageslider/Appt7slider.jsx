import React from 'react'
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const slideImage = [
  {
    url: "https://photos.zillowstatic.com/fp/d7c22e58e3053b388df299ed1e617bcc-cc_ft_768.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/0f2a0de21dc50aece473ceb0fb492302-cc_ft_384.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/d02fd187af898d472eb6481a4db706e5-cc_ft_384.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/990935e6bcdfe445eb0d7a27feffecf1-cc_ft_768.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/27a88cf13880ce10973a456ecef55432-cc_ft_384.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/e95d8268c5a176e27d0d3f26fd3a1a37-cc_ft_768.webp",
    caption: "first slide",
    },
   {
    url: " https://photos.zillowstatic.com/fp/b6605d1c6ff2f1f0ff9814e02012e505-cc_ft_384.webp",
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


const Appt7slider = () => {
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

export default Appt7slider