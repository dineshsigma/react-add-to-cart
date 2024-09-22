import removeItemIcon from "../assets/images/icon-remove-item.svg";

import styles from "./CartItem.module.css";

function CartItem() {
  return (
    <div className={styles.cartItem}>
      <div>
        <h3 className={styles.title}>Classic Tiramisu</h3>
        <p>
          <span className={styles.quantity}>1x</span>
          <span className={styles.unitPrice}>@ $5.50</span>
          <span className={styles.totalPrice}>$5.50</span>
        </p>
      </div>
      <button className={styles.removeBtn}>
        <img src={removeItemIcon} alt="" />
      </button>
    </div>
  );
}

export default CartItem;
