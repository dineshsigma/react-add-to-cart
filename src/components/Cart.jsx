import CartItem from "./CartItem";
import IconCarbonNeutral from "../assets/images/IconCarbonNeutral.svg";

import styles from "./Cart.module.css";

import { useDessertOrderData } from "../contexts/DessertOrderDataContext";

function Cart() {
  const { dispatch, orderConfirmed, items } = useDessertOrderData();

  console.log(orderConfirmed);

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.title}>
        Your Cart ({items.filter((item) => item.quantity != 0).length})
      </h2>
      {items
        .filter((item) => item.quantity != 0)
        .map((item) => (
          <CartItem item={item} key={item.name} />
        ))}
      <div className={styles.totalPrice}>
        <p>Order Total</p>
        <p>
          $
          {items
            .map((items) => items.price * items.quantity)
            .reduce((a, b) => a + b, 0)
            .toFixed(2)}
        </p>
      </div>
      <div className={styles.carbonNeutralBanner}>
        <IconCarbonNeutral />
        <p>
          This is a <strong>carbon-neutral</strong> delivery
        </p>
      </div>
      <button
        onClick={() => dispatch({ type: "confirmOrder" })}
        className={styles.confirmBtn}
      >
        Confirm Order
      </button>
    </div>
  );
}

export default Cart;
