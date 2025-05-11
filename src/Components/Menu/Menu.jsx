import React, { useState } from "react";
import { useUser } from "../../usercontext";
import "./Menu.css";
import Modal from "../Modal/Modal";
import arays from "../../images/5obz.jpg";
import mix from "../../images/mix.jpg";
import mkt3 from "../../images/mkt3.jpg";
import roll from "../../images/roll.jpg";
import cola from "../../drinks/cocacola.jpeg";
import fanta from "../../drinks/fanta.png";
import water from "../../drinks/water.png";

import frenchfries from "../../images/frenchfries.jpg";

const menuData = {
  meals: [
    {
      name: "خبزة عرايس",
      price: "15₪",
      description: "خبزة عرايس مشوية مع سلطات حسب الرغبة.",
      image: arays,
    },
    {
      name: "ميكس عرايس",
      price: "35₪",
      description:
        "ميكس عرايس خبزة عرايس ورول عرايس مع اضافة سلطات حسب الرغبة.",
      image: mix,
    },
    {
      name: "بوكس خبز مقطع",
      price: "20₪",
      description: "",
      image: mkt3,
    },
    {
      name: "رول عرايس سيخين",
      price: "25₪",
      description: "",
      image: roll,
    },
  ],
  beside: [
    {
      name: "بطاطا مقلية",
      price: "15₪",
      description: "",
      image: frenchfries,
    },
  ],
  drinks: [
    {
      name: "كوكا كولا",
      price: "8₪",
      description: "",
      image: cola,
    },
    {
      name: "فانتا",
      price: "8₪",
      description: "",
      image: fanta,
    },
    {
      name: "ماء معدنية",
      price: "5₪",
      description: "",
      image: water,
    },
  ],
};

export default function Menu() {
  const { selectedCategory, setSelectedItem } = useUser();
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
