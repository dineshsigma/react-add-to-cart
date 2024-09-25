import PropTypes from "prop-types";

import IconOrderConfirmed from "../assets/images/IconOrderConfirmed.svg";
import Button from "./Button";
import ConfirmedItem from "./ConfirmedItem";

import styles from "./Modal.module.css";

import { useDessertOrderData } from "../contexts/DessertOrderDataContext";

function Modal() {
  const { items, dispatch } = useDessertOrderData();
  return (
    <div className={styles.modal}>
      <IconOrderConfirmed className={styles.checkMarkImage} />
      <h2>Order Confirmed</h2>
      <p className={styles.subTitle}>We hope you enjoy your food!</p>
      <div className={styles.confirmedCart}>
        {items
          .filter((item) => item.quantity != 0)
          .map((item) => (
            <ConfirmedItem item={item} key={item.name} />
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
      </div>
      <Button
        text="Start New Order"
        onClick={() => dispatch({ type: "confirmOrder" })}
      />
    </div>
  );
}
Modal.propTypes = {
  items: PropTypes.object,
};

export default Modal;
