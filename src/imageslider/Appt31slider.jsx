import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const slideImage = [
  {
    url: "https://photos.zillowstatic.com/fp/0f5444459e0e004159ba119d694fccb0-cc_ft_768.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/04b362d4b22f7ff095ee2cc6922939fb-cc_ft_768.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/e510d51cb1edbbef02892660997c7e69-cc_ft_384.webp",
    caption: "first slide",
    },
  {
    url: "https://photos.zillowstatic.com/fp/b57bccc42667bf610c0f10225207fb68-cc_ft_384.webp",
    caption: "first slide",
    },
  {
    url: "https://photos.zillowstatic.com/fp/1286fe4208add05794a8356ea3e879a8-cc_ft_384.webp",
    caption: "first slide",
    },
  {
    url: "https://photos.zillowstatic.com/fp/4eff8155e6cba931ae381833201c9e96-cc_ft_384.webp",
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
const Appt31slider = () => {
  return (
    <div className="slide-container container" id="slide">
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
  );
};

export default Appt31slider;
