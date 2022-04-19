import React from "react";
import Card from "../UI/Card";
import MealItem from "../UI/MealItem";
import classes from "./AvailableMeals.module.css";
const AvailableMeals = () => {
  const DummyMeals = [
    {
      id: "m1",
      item: "Pav Bhaji",
      description:
        "One of the most popular dish of Mumbai. Its flavour due to the asthetics spices enhance your tongue's taste",
      price: "80",
    },
    {
      id: "m2",
      item: "Misal Pav",
      description:
        "Its most selling dish of 2021 in our website. In it you will get 4 diffrent type of rassa.",
      price: "60",
    },
    {
      id: "m3",
      item: "Momos",
      description:
        "Famous street food of Delhi. You will get all variety of momos on our site ",
      price: "90",
    },
    {
      id: "m4",
      item: "Pani Puri",
      description:
        "We made it with keepin 100% hygine. You won't get over the taste of this panipuri",
      price: "100",
    },
  ];

  const wholeMeals = DummyMeals.map((items) => (
    <MealItem
      label="Amount"
      key={items.id}
      item={items.item}
      id={items.id}
      description={items.description}
      price={items.price}
    />
  ));
  return (
    <Card className={classes.meals}>
      <ul>{wholeMeals}</ul>
    </Card>
  );
};

export default AvailableMeals;
