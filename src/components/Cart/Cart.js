import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/modal";
import CardContext from "../store/cart-context";
import CartItems from "./CartItem";
const Cart = (props) => {
  const ctxCart = useContext(CardContext);

  const totalInsertedAmount = `${ctxCart.totalAmount}Rs`;
  const hasItem = ctxCart.item.length > 0;

  const cartRemoveHandler = (id) => {
    ctxCart.removeItems(id);
  };

  const cartAddHandler = (item) => {
    ctxCart.addItem({ ...item, amount: 1 });
  };
  const CartItem = (
    <ul className={classes["cart-items"]}>
      {" "}
      {ctxCart.item.map((items) => (
        <CartItems
          key={items.id}
          name={items.name}
          amount={items.amount}
          price={items.price}
          onRemove={cartRemoveHandler.bind(null, items.id)}
          onAdd={cartAddHandler.bind(null, items)}
        />
      ))}{" "}
    </ul>
  );

  return (
    <Modal onHide={props.onHide}>
      <div>
        {CartItem}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalInsertedAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onHide}>
            {" "}
            Close
          </button>
          {hasItem && <button className={classes.button}>Order</button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
