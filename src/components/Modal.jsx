import PropTypes from "prop-types";

import IconOrderConfirmed from "../assets/images/IconOrderConfirmed.svg";
import Button from "./Button";

import styles from "./Modal.module.css";

import { useDessertOrderData } from "../contexts/DessertOrderDataContext";

function Modal({ items }) {
  const { dispatch } = useDessertOrderData();
  return (
    <div className={styles.modal}>
      <IconOrderConfirmed className={styles.checkMarkImage} />
      <h2>Order Confirmed</h2>
      <p className={styles.subTitle}>We hope you enjoy your food!</p>
      <div className={styles.confirmedCart}>
        <p>Tiramisu</p>
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
