import React, { useContext, useState, useEffect } from "react";
import CartIcon from "../Cart/CartSvg";
import CardContext from "../store/cart-context";
import classes from "./HeaderButton.module.css";

const HeaderButton = (props) => {
  const cartPrv = useContext(CardContext);
  const { item } = cartPrv;
  const [BumpEffect, setBumpEffect] = useState(false);
  useEffect(() => {
    setBumpEffect(true);
    setTimeout(() => {
      setBumpEffect(false);
    }, 300);
  }, [item]);

  const BtnClasses = `${classes.button} ${BumpEffect ? classes.bump : ""}`;
  console.log(cartPrv);
  const numberOfItems = cartPrv.item.reduce((curNum, item) => {
    return curNum + 1;
  }, 0);
  return (
    <button className={BtnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart Items</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderButton;
