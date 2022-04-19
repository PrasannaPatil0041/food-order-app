import React from "react";
import classes from "./MealSummary.module.css";
const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <h2> Dedicated in delivering best food to you </h2>
      <h3>
        {" "}
        We are connected with 100s of restaurant anear you, so you can{" "}
        <br></br> get your favourite food in couple of minutes.{" "}
      </h3>
      <p>
        We give acess to the best restaurant in our list. We will use the best
        quality ingredients ,health stuffs. There is no quality compromise in
        our food. Order food and get exciting offers on your favourite meals.
      </p>
    </section>
  );
};

export default MealSummary;
