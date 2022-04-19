import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const inputRef = useRef();
  const [isValid, setisValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    const enterAmount = inputRef.current.value;
    const enterAmountNumber = +enterAmount;
    console.log(enterAmount);
    if (
      enterAmount.trim().length === 0 ||
      enterAmountNumber < 1 ||
      enterAmountNumber > 5
    ) {
      setisValid(false);
      return;
    }
    props.onAddHandle(enterAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.amount}>
        <label htmlFor={props.input.id}>{props.input.label}</label>
        <input {...props.input} ref={inputRef}></input>
      </div>
      <button>+ Add</button>
      {!isValid && <p> Please enter valid amount </p>}
    </form>
  );
};
export default MealItemForm;
