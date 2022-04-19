import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Image.module.css";

const Image = () => {
  return (
    <main className={classes["main-image"]}>
      <img src={mealsImage} alt="Food_Image"></img>
    </main>
  );
};

export default Image;
