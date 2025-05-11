import React, { useState } from "react";
import "./Header.css";
import { FaHamburger } from "react-icons/fa";
import Logo from "../../images-tantuni/logo.JPG";
import Cover from "../../images-tantuni/cover.jpg";
import waze from "../../icons/waze.png";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleOverlayClick = (e) => {
    // تأكد إنو كبس على الخلفية مش داخل القائمة نفسها
    if (e.target.classList.contains("overlay")) {
      setShow(false);
    }
  };
  return (
    <header className="header">
      <img src={Cover} alt="مطعمنا" className="cover" />
      <img src={Logo} alt="مطعمنا" className="logo" />
      <div className="informations">
        <a
          href="https://www.waze.com/live-map/meeting?token=jnbEUiAqqkbOHm2lHA-sd&locale=ar&env=il&utm_campaign=share_drive&utm_source=waze_app&utm_medium=undefined"
          target="_blank"
        >
          <img src={waze} width={"20px"} alt="" /> موقعنا
        </a>
        <h2
          onClick={() => {
            setShow(show === "none" ? "flex" : "none");
          }}
        >
          ايام العمل
        </h2>
      </div>
      {/* البوب-أب يظهر فقط إذا show = true */}
      {show && (
        <div className="overlay" onClick={handleOverlayClick}>
          <div className="work-days-popup">
            <span className="close-btn" onClick={() => setShow(false)}>
              ❌
            </span>
            <h3>أيام العمل</h3>
            <ul>
              <li>يوم الأحد 11:00 - 21:00</li>
              <li>يوم الإثنين 11:00 - 21:00</li>
              <li>يوم الثلاثاء 11:00 - 21:00</li>
              <li>يوم الأربعاء 11:00 - 21:00</li>
              <li>يوم الخميس 11:00 - 21:00</li>
              <li>يوم الجمعة 11:00 - 21:00</li>
              <li>يوم السبت 11:00 - 21:00</li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
