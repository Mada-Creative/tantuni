import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import food from "../icons/وجبات.png";
import juice from "../icons/مقبلات.png";
import salads from "../icons/سلطات.png";
import Logo from "../images-tantuni/logo.JPG";
import "./OpenPage.css";

export default function ThankYouPage() {
  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      nav("/Menu");
    }, 4000);
  }, []);

  return (
    <div className="AnimationPageDiv">
      {/* {OpenFunction()} */}
      <header
        style={{
          backgroundColor: "transparent",
          display: "flex",
          height: "300px",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          width={"70%"}
          style={{
            border: "3px solid black",
            borderRadius: "50%",
            animation: "openBig ease-in-out 3s ",
          }}
          src={Logo}
          alt="Logo"
        />
      </header>
      <div className="OpenAnimationDiv">
        <img id="Fork" src={juice} alt="juice" />
        <img id="Pizza" src={food} alt="food" />
        <img id="Salad" src={salads} alt="salads" />
      </div>
      <footer className="mada-footer">
        <p>
          <span className="by">Designed & Developed by</span>{" "}
          <span className="mada-brand">
            Mada Creative<sup>®</sup>
          </span>
        </p>
      </footer>
    </div>
  );
}
