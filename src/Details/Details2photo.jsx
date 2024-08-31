import React from 'react'
import "react-slideshow-image/dist/styles.css"
import { Slide } from "react-slideshow-image"

const slideImage = [
    {
    url: "https://rentchasers.com/wp-content/uploads/gravity_forms/5-02805bedf342a230bfde6b19d478351e/2024/07/20240426_125509.jpg",
  },
  {
    url: "https://rentchasers.com/wp-content/uploads/gravity_forms/5-02805bedf342a230bfde6b19d478351e/2024/07/20240426_125426.jpg",
  },
  {
    url: "https://rentchasers.com/wp-content/uploads/gravity_forms/5-02805bedf342a230bfde6b19d478351e/2024/07/20240426_124852.jpg",
  },
  {
    url: "https://rentchasers.com/wp-content/uploads/gravity_forms/5-02805bedf342a230bfde6b19d478351e/2024/07/20240426_125054.jpg1a011c.jpg",
    },
  {
    url: "https://rentchasers.com/wp-content/uploads/gravity_forms/5-02805bedf342a230bfde6b19d478351e/2024/07/20240426_124701-1.jpg",
  },
  {
    url: "https://rentchasers.com/wp-content/uploads/gravity_forms/5-02805bedf342a230bfde6b19d478351e/2024/07/20240426_124617.jpg",
  },
  {
    url: "https://rentchasers.com/wp-content/uploads/gravity_forms/5-02805bedf342a230bfde6b19d478351e/2024/07/20231211_110546.jpg",
  },
  {
    url: "https://rentchasers.com/wp-content/uploads/gravity_forms/5-02805bedf342a230bfde6b19d478351e/2024/07/20231211_110618.jpg",
  },
  {
    url: "https://live.staticflickr.com/1784/41607627060_85c61a011c.jphttps://rentchasers.com/wp-content/uploads/gravity_forms/5-02805bedf342a230bfde6b19d478351e/2024/07/20231211_111401.jpg",
  },
];

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
  backgroundSize: "cover",
};

const Details2photo = () => {
  return (
   <div>
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
    </div>
  )
}

export default Details2photo