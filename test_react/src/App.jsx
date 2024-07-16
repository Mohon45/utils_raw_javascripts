import { useState } from "react";
import "./App.css";

const images = [
  { src: "https://via.placeholder.com/400x300", alt: "Image 1" },
  { src: "https://via.placeholder.com/400x300", alt: "Image 2" },
  { src: "https://via.placeholder.com/400x300", alt: "Image 3" },
  { src: "https://via.placeholder.com/400x300", alt: "Image 4" },
  { src: "https://via.placeholder.com/400x300", alt: "Image 5" },
];

function App() {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleImageHover = (index) => {
    console.log(index);
    setHoveredImage(index);
  };
  return (
    <div className="banner">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`image ${index === hoveredImage ? "expanded" : "shrunken"}`}
          onMouseEnter={() => handleImageHover(index)}
          onMouseLeave={() => setHoveredImage(null)}
        />
      ))}
    </div>
  );
}

export default App;
