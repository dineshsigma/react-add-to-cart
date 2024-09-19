import styles from "./AddToCartButton.module.css";

import cartImage from "../assets/images/icon-add-to-cart.svg";

function AddToCartButton() {
  return (
    <button className={styles.button}>
      <img src={cartImage} alt="" />
      <span>Add to Cart</span>
    </button>
  );
}

export default AddToCartButton;
