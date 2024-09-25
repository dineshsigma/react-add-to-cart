import PropTypes from "prop-types";

import IconOrderConfirmed from "../assets/images/IconOrderConfirmed.svg";

import styles from "./Modal.module.css";

function Modal({ items }) {
  return (
    <div className={styles.modal}>
      <IconOrderConfirmed className={styles.checkMarkImage} />
      <h2>Order Confirmed</h2>
      <p className={styles.subTitle}>We hope you enjoy your food!</p>
      <div className={styles.confirmedCart}>
        <p>Tiramisu</p>
      </div>
    </div>
  );
}
Modal.propTypes = {
  items: PropTypes.object,
};

export default Modal;
