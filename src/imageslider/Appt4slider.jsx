import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const slideImage = [
  {
    url: "https://photos.zillowstatic.com/fp/0755b2f62181ef4129efbdb049daa4ff-cc_ft_768.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/dd5f99c4c7f6dc403dcb6bd2da24b6c2-cc_ft_384.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/de7d9778868b69729d646a2d88eb2467-cc_ft_768.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/59e3021433be9f031b5915cbf7191363-cc_ft_384.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/8e7608256178678946a60526ba07143b-cc_ft_384.webp",
    caption: "first slide",
  },
  {
    url: "https://photos.zillowstatic.com/fp/52f5e410e0150d47bb823c65cc7dfa33-cc_ft_384.webp",
    caption: "first slide",
    },
   {
    url: " https://photos.zillowstatic.com/fp/c90b76daf2ea4d5cbd59d3fb6910450c-cc_ft_384.webp",
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
const Appt4slider = () => {
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
  );
};

export default Appt4slider;
