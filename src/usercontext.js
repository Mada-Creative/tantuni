import React, { createContext, useContext, useState } from "react";
import drink from "./icons/juice.png";
import salads from "./icons/salads.png";
import food from "./icons/food.png";

import chips from "./images/chips.png";
import sandwiches from "./icons/cooking.png";

// إنشاء سياق المستخدم
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [categories] = useState([
    { id: "food", name: "وجبات", image: food },
    { id: "meals", name: "ساندويشات", image: sandwiches },
    { id: "salads", name: "سلطات", image: salads },
    { id: "drinks", name: "مشروبات", image: drink },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("meals");

  // إدارة العنصر المحدد لعرضه في النافذة المنبثقة
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <UserContext.Provider
      value={{
        categories,
        selectedCategory,
        setSelectedCategory,
        selectedItem,
        setSelectedItem,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook لاستخدام السياق بسهولة
export const useUser = () => useContext(UserContext);
