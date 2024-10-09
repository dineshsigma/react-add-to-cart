import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

import importData from "../assets/data/data.json";

// initial state of the application using the imported item data from the JSON file
const initialState = {
  items: [...importData.map((x) => ({ ...x, quantity: 0 }))],
  orderConfirmed: false,
};

// create context for components
const DessertOrderDataContext = createContext(undefined);

// provider component provides current state to view the data and the dispatch function to change the data to all of child elements
function DessertOrderDataProvider({ children }) {
  // use reducer function to simplify more complex data manipulation
  const [{ items, orderConfirmed }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <DessertOrderDataContext.Provider
      value={{
        items,
        orderConfirmed,
        dispatch,
      }}
    >
      {children}
    </DessertOrderDataContext.Provider>
  );
}
DessertOrderDataProvider.propTypes = {
  children: PropTypes.node,
};

// use context and check if it is inside the pledge Provider
function useDessertOrderData() {
  const context = useContext(DessertOrderDataContext);
  // console.log(context);
  if (context === undefined)
    throw new Error(
      "DessertOrderDataContext was used outside of the PledgeDataProvider"
    );
  return context;
}

// reducer function that contains the logic for updating the state
function reducer(state, action) {
  switch (action.type) {
    case "confirmOrder":
      return { ...state, orderConfirmed: true };
    case "startNewOrder":
      return {
        ...state,
        orderConfirmed: false,
        items: state.items.map((item) => {
          return { ...item, quantity: 0 };
        }),
      };
    case "incrementItem":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.name === action.payload) {
            return { ...item, quantity: ++item.quantity };
          } else {
            return item;
          }
        }),
      };
    case "decrementItem":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.name === action.payload) {
            return { ...item, quantity: --item.quantity };
          } else {
            return item;
          }
        }),
      };
    case "clearItem":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.name === action.payload) {
            return { ...item, quantity: 0 };
          } else {
            return item;
          }
        }),
      };
    default:
      throw new Error("Action unknown");
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export { DessertOrderDataProvider, useDessertOrderData };
