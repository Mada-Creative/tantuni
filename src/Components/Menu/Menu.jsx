import React, { useContext, useState } from "react";
import { useUser } from "../../usercontext";
import "./Menu.css";
import Modal from "../Modal/Modal";

export default function Menu() {
  const { selectedCategory, setSelectedItem, menuData } = useUser();
  const items = menuData[selectedCategory] || [];
  const [grid, setGrid] = useState("1fr 1fr");

  return (
    <div style={{ gridTemplateColumns: grid }} className="menu">
      {/* <button
        onClick={() => {
          setGrid(grid == "1fr 1fr" ? "1fr" : "1fr");
        }}
      >
        gridchange
      </button> */}
      {items.map((item, index) => (
        <div
          key={index}
          className="menu-item"
          onClick={() => setSelectedItem(item)}
        >
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
      ))}

      {/* إظهار النافذة عند اختيار عنصر */}
      <Modal />
    </div>
  );
}
