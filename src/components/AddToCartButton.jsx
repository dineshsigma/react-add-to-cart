import styles from "./AddToCartButton.module.css";

import PropTypes from "prop-types";

import cartImage from "../assets/images/icon-add-to-cart.svg";
import incrementImage from "../assets/images/icon-increment-quantity.svg";
import decrementImage from "../assets/images/icon-decrement-quantity.svg";

function AddToCartButton({ quantity }) {
  if (quantity == 0) {
    return (
      <button className={styles.button}>
        <img src={cartImage} alt="" />
        <span>Add to Cart</span>
      </button>
    );
  } else {
    return (
      <div className={styles.buttonActive}>
        <button className={styles.plusMinusBtn}>
          <img src={decrementImage} alt="-" />
        </button>
        <p>{quantity}</p>
        <button className={styles.plusMinusBtn}>
          <img src={incrementImage} alt="+" />
        </button>
      </div>
    );
  }
}
AddToCartButton.propTypes = {
  quantity: PropTypes.number,
};

export default AddToCartButton;
