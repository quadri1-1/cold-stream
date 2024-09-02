import React from 'react'
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const slideImage = [
  {
    url: "https://photos.zillowstatic.com/fp/c381691c98768c2c81b59e4311647283-cc_ft_768.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/eb94726eb479f8caedb67cedf2c4f47c-cc_ft_384.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/0bc7aab3f93cba5c269b67d12069db04-cc_ft_384.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/064e1306f8e15afc59049841d96ddf2e-cc_ft_384.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/17c8526e662c382b2aa6b1e3cc98c3c6-cc_ft_768.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/224a35fd2e7e6d41d41c3e27e1e0c3d6-cc_ft_384.webp",
    caption: "first slide",
    },
   {
    url: " https://photos.zillowstatic.com/fp/b27a2a8cd88b3846f250c1f18e58817d-cc_ft_768.webp",
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

const Appt12islider = () => {
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

export default Appt12islider