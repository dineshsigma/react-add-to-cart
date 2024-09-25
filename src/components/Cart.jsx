import CartItem from "./CartItem";
import IconCarbonNeutral from "../assets/images/IconCarbonNeutral.svg";
import EmptyCartIcon from "../assets/images/EmptyCart.svg";
import Button from "./Button";

import styles from "./Cart.module.css";

import { useDessertOrderData } from "../contexts/DessertOrderDataContext";

function Cart() {
  const { dispatch, orderConfirmed, items } = useDessertOrderData();

  console.log(orderConfirmed);
  const totalItems = items.filter((item) => item.quantity != 0).length;

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.title}>Your Cart ({totalItems})</h2>
      {totalItems ? (
        <>
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
          <Button
            text="Confirm Order"
            onClick={() => dispatch({ type: "confirmOrder" })}
          />
        </>
      ) : (
        <div className={styles.emptyCartContainer}>
          <EmptyCartIcon />
          <p>Your added items will appear here</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
