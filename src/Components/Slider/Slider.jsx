import React from "react";
import { useUser } from "../../usercontext";
import "./Slider.css";

export default function Slider() {
  const { categories, setSelectedCategory } = useUser();

  return (
    <div className="slider-container">
      <div className="slider">
        {categories.map((category) => (
          <div
            key={category.id}
            className="slider-item"
            onClick={() => setSelectedCategory(category.id)}
          >
            <img
              src={category.image}
              alt={category.name}
              className="slider-image"
            />
            <p className="slider-text">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
