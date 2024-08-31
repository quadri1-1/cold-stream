import React from 'react'
import "react-slideshow-image/dist/styles.css"
import { Slide } from "react-slideshow-image"


const slideImage = [
    {
        url: "https://th.bing.com/th/id/OIP.9mZgC1sGR_mhjtTQ45QthQHaFj?w=1920&h=1440&rs=1&pid=ImgDetMain",
        caption: "first slide"
    },
    {
        url: "https://www.splashout.co.uk/wp-content/uploads/sites/124/2019/01/Splashout-Bathrooms-showroom.jpg",
        caption: "first slide"
    },
    {
        url: "https://live.staticflickr.com/1784/41607627060_85c61a011c.jpg",
        caption: "first slide"
    },
];
const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
    backgroundSize: "cover",
    
}
const Imageslider = () => {
  return (
      <div className='slide-container container'>
          <Slide>
              {slideImage.map((image, index) => (
                  <div key={index}>
                      <div style={{ ...divStyle, backgroundImage: `url(${image.url})` }}>
                      </div>
                  </div>
              ))}
          </Slide>
    </div>
  )
}

export default Imageslider