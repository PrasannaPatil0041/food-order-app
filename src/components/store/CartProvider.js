import React, { useReducer, useState } from "react";
import CardContext from "./cart-context";

const defaultState = {
  item: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "Add") {
    const existingCartItemIndex = state.item.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.item[existingCartItemIndex];

    let updateItems;

    if (existingCartItem) {
      let updateItem;
      updateItems = [...state.item];
      updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updateItems[existingCartItemIndex] = updateItem;
    } else {
      updateItems = state.item.concat(action.item);
    }
    const updatetotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      item: updateItems,
      totalAmount: updatetotalAmount,
    };
  }

  if (action.type === "Delete") {
    const existingCartItemIndex = state.item.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.item[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updateItems;
    if (existingCartItem.amount === 1) {
      updateItems = state.item.filter((item) => item.id !== action.id);
    } else {
      let updateItem;
      updateItems = [...state.item];
      updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updateItems[existingCartItemIndex] = updateItem;
    }

    return {
      item: updateItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultState;
};

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, defaultState);
  const deleteItemHandler = (id) => {
    dispatch({ type: "Delete", id: id });
  };
  const addItemHandler = (item) => {
    dispatch({ type: "Add", item: item });
  };

  const [ItemNumber, setItemNumber] = useState(0);
  const changeNumberItem = (number) => {
    setItemNumber(number);
  };
  const cardContext = {
    item: state.item,
    totalAmount: state.totalAmount,
    addItem: addItemHandler,
    removeItems: deleteItemHandler,
    itemfnc: changeNumberItem,
    itemNo: ItemNumber,
  };
  return (
    <CardContext.Provider value={cardContext}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CartProvider;
