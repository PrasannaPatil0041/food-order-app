import React from "react";

const CardContext = React.createContext({
  item: [],
  totalAmount: 0,
  addItem: (items) => {},
  removeItems: (id) => {},
  itemfnc: () => {},
  itemNo: 0,
});

export default CardContext;
