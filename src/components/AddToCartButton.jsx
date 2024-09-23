import styles from "./AddToCartButton.module.css";

import PropTypes from "prop-types";

import IconAddToCart from "../assets/images/IconAddToCart.svg";
import IconIncrementQuantity from "../assets/images/IconIncrementQuantity.svg";
import IconDecrementQuantity from "../assets/images/IconDecrementQuantity.svg";

import { useDessertOrderData } from "../contexts/DessertOrderDataContext";

function AddToCartButton({ quantity, name }) {
  const { dispatch } = useDessertOrderData();

  if (quantity == 0) {
    return (
      <button
        className={styles.button}
        onClick={() => dispatch({ type: "incrementItem", payload: name })}
      >
        <IconAddToCart />
        <span>Add to Cart</span>
      </button>
    );
  } else {
    return (
      <div className={styles.buttonActive}>
        <button
          className={styles.plusMinusBtn}
          onClick={() => dispatch({ type: "decrementItem", payload: name })}
        >
          <IconDecrementQuantity />
        </button>
        <p>{quantity}</p>
        <button
          className={styles.plusMinusBtn}
          onClick={() => dispatch({ type: "incrementItem", payload: name })}
        >
          <IconIncrementQuantity />
        </button>
      </div>
    );
  }
}
AddToCartButton.propTypes = {
  quantity: PropTypes.number,
  name: PropTypes.string,
};

export default AddToCartButton;
