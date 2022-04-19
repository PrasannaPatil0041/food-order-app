import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./modal.module.css";
import CardContext from "../store/cart-context";
const Modal = (props) => {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>;
  };

  const ModalOverlay = (props) => {
    const [Jump, setJump] = useState(false);
    const CartPrv = useContext(CardContext);
    const { itemNo } = CartPrv;
    useEffect(() => {
      setJump(true);
      setTimeout(() => {
        setJump(false);
      }, 350);
    }, [itemNo]);
    const divClass = `${classes.modal}`;
    return (
      <div className={divClass}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };
  const bacdrpPortal = document.getElementById("overlay");
  const modalPortal = document.getElementById("modal");

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onHide} />, bacdrpPortal)}
      ;
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        modalPortal
      )}
    </React.Fragment>
  );
};

export default Modal;
