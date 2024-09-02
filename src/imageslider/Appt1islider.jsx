import React from 'react'
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const slideImage = [
  {
    url: "https://photos.zillowstatic.com/fp/479d801e9f1899d9068cd0c77aef4d3e-cc_ft_384.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/ff5be367df9b5016cc69883bd4710c2d-cc_ft_768.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/ff7221fdb2372ab9beaf84be984c1dba-cc_ft_768.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/f3277bd10556182337bcafc77754f601-cc_ft_384.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/93adb3c1595303a5aef25e2828a8fd2a-cc_ft_768.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/2b05f549b282d33e7f708f2a33123dc6-cc_ft_768.webp",
    caption: "first slide",
    },
   {
    url: " https://photos.zillowstatic.com/fp/fefc8f8ffa4a3a0f5db7d799333df2ea-cc_ft_768.webp",
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


const Appt1islider = () => {
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

export default Appt1islider