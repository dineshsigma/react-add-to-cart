import styles from "./AddToCartButton.module.css";

import PropTypes from "prop-types";

import IconAddToCart from "../assets/images/IconAddToCart.svg";
import IconIncrementQuantity from "../assets/images/IconIncrementQuantity.svg";
import IconDecrementQuantity from "../assets/images/IconDecrementQuantity.svg";

function AddToCartButton({ quantity }) {
  if (quantity == 0) {
    return (
      <button className={styles.button}>
        <IconAddToCart />
        <span>Add to Cart</span>
      </button>
    );
  } else {
    return (
      <div className={styles.buttonActive}>
        <button className={styles.plusMinusBtn}>
          <IconDecrementQuantity />
        </button>
        <p>{quantity}</p>
        <button className={styles.plusMinusBtn}>
          <IconIncrementQuantity />
        </button>
      </div>
    );
  }
}
AddToCartButton.propTypes = {
  quantity: PropTypes.number,
};

export default AddToCartButton;
