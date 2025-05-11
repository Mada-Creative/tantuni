import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import food from "../icons/food.png";
import juice from "../icons/juice.png";
import salads from "../icons/salads.png";
import Logo from "../images-well-done/logo.png";
import "./OpenPage.css";

export default function ThankYouPage() {
  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      nav("/Menu");
    }, 6000);
  }, []);

  return (
    <div className="AnimationPageDiv">
      {/* {OpenFunction()} */}
      <header
        style={{
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img width={"70%"} src={Logo} alt="Logo" />
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
