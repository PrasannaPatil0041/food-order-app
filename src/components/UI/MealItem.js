import React, { useContext } from "react";
import MealItemForm from "../Meals/MealItemForm";
import CardContext from "../store/cart-context";
import classes from "./MealItem.module.css";
const MealItem = (props) => {
  const prices = `${props.price}Rs`;
  const ctx = useContext(CardContext);
  console.log(ctx.item);
  const addItemHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      amount: amount,
      price: props.price,
      name: props.item,
    });
  };
  return (
    <li className={classes.meal}>
      <div className={classes.upper}>
        <h3>{props.item}</h3>
        <p className={classes.description}>{props.description}</p>
        <h4 className={classes.price}>{prices}</h4>
      </div>
      <div>
        <MealItemForm
          onAddHandle={addItemHandler}
          input={{
            label: "Amount",
            id: "Amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
      </div>
    </li>
  );
};

export default MealItem;
