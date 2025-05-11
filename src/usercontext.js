import React, { createContext, useContext, useState } from "react";
import مشروبات from "./icons/مشروبات.png";
import سلطات from "./icons/سلطات.png";
import وجبات from "./icons/وجبات.png";
import مقبلات from "./icons/مقبلات.png";
import حلويات from "./icons/حلويات.png";
import cola from "./drinks/cocacola.jpeg";
import fanta from "./drinks/fanta.png";
import water from "./drinks/water.png";
import تنتوني from "./images-tantuni/تنتوني.jpg";
import بالمكسرات from "./images-tantuni/بالمكسرات.jpg";
import بوتيتو from "./images-tantuni/بوتيتو.jpg";
import تبولة from "./images-tantuni/تبولة.jpg";
import سلطة from "./images-tantuni/سلطة.jpg";
import سوشي from "./images-tantuni/سوشي تنتوني.jpg";
import شيبس from "./images-tantuni/شيبس.jpg";
import كبة from "./images-tantuni/كبة.jpg";
import ميكس from "./images-tantuni/ميكس.jpg";
import كنافة from "./images-tantuni/كنافة.jpg";

// إنشاء سياق المستخدم
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [categories] = useState([
    { id: "وجبات", name: "وجبات", image: وجبات },
    { id: "سلطات", name: "سلطات", image: سلطات },
    { id: "مقبلات", name: "مقبلات", image: مقبلات },
    { id: "حلويات", name: "حلويات", image: حلويات },
    { id: "مشروبات", name: "مشروبات", image: مشروبات },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("وجبات");

  // إدارة العنصر المحدد لعرضه في النافذة المنبثقة
  const [selectedItem, setSelectedItem] = useState(null);

  const menuData = {
    وجبات: [
      {
        name: "تنتوني دجاج",
        price: "34₪",
        description: "",
        image: تنتوني,
      },
      {
        name: "تنتوني عجل",
        price: "36₪",
        description: "",
        image: تنتوني,
      },
      {
        name: "تنتوني ميكس - عجل ودجاج",
        price: "36₪",
        description: "",
        image: تنتوني,
      },
      {
        name: "سوشي تنتوني",
        price: "48₪",
        description: "",
        image: سوشي,
      },
    ],
    سلطات: [
      {
        name: "سلطة تبولة",
        price: "32₪",
        description: "",
        image: تبولة,
      },
      {
        name: "سلطة تنتوني",
        price: "38₪",
        description: "",
        image: سلطة,
      },
    ],
    مقبلات: [
      {
        name: "حبة كبة",
        price: "8₪",
        description: "",
        image: كبة,
      },
      {
        name: "شيبس",
        price: "25₪",
        description: "",
        image: شيبس,
      },
      {
        name: "بوتيتو",
        price: "27₪",
        description: "",
        image: بوتيتو,
      },
      {
        name: "ميكس شيبس وبوتيتو",
        price: "27₪",
        description: "",
        image: ميكس,
      },
    ],
    حلويات: [
      {
        name: "كنافة جبنة شخصية",
        price: "24₪",
        description: "",
        image: كنافة,
      },
      {
        name: "كنافة بالمكسرات",
        price: "25₪",
        description: "",
        image: بالمكسرات,
      },
    ],
    مشروبات: [
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

  return (
    <UserContext.Provider
      value={{
        categories,
        selectedCategory,
        setSelectedCategory,
        selectedItem,
        setSelectedItem,
        menuData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook لاستخدام السياق بسهولة
export const useUser = () => useContext(UserContext);
