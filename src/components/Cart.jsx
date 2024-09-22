import CartItem from "./CartItem";
import carbonNeutralIcon from "../assets/images/icon-carbon-neutral.svg";

import styles from "./Cart.module.css";

function Cart() {
  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.title}>Your Cart (7)</h2>
      <CartItem />
      <CartItem />
      <CartItem />
      <div className={styles.totalPrice}>
        <p>Order Total</p>
        <p>$46.50</p>
      </div>
      <div className={styles.carbonNeutralBanner}>
        <img src={carbonNeutralIcon} alt="" />
        <p>
          This is a <strong>carbon-neutral</strong> delivery
        </p>
      </div>
      <button className={styles.confirmBtn}>Confirm Order</button>
    </div>
  );
}

export default Cart;
