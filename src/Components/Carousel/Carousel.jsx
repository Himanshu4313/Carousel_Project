import { useState } from "react";
import "./Carousel.css";
const image = [
  "https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg",
  "https://www.rd.com/wp-content/uploads/2021/06/GettyImages-1205998407-e1624731290663.jpg?fit=700%2C1024",
  "https://hips.hearstapps.com/hmg-prod/images/wolf-dog-breeds-siberian-husky-1570411330.jpg?crop=1xw:0.84375xh;center,top",
];
function Carousel() {
  const [currentIndex, setCurrentindex] = useState(0);

  function nextCarousel() {
    setCurrentindex(currentIndex == image.length - 1 ? 0 : currentIndex + 1);
  }
  function prevCarousel() {
    setCurrentindex(currentIndex == 0 ? image.length - 1 : currentIndex - 1);
  }

  return (
    <>
      <div className="Carousel-container">
        <button onClick={() => prevCarousel()}>Left</button>
        <div className="ImageShow">
           <img src={image[currentIndex]} alt="image" /> 
        </div>
        <button onClick={() => nextCarousel()}>Right</button>
      </div>
    </>
  );
}
export default Carousel;
