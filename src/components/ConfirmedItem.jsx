import PropTypes from "prop-types";

import styles from "./ConfirmedItem.module.css";

function ConfirmedItem({ item }) {
  return (
    <div className={styles.confirmedItem}>
      <img src={item.image.thumbnail} alt={item.name} />
      <div className={styles.textBox}>
        <h3 className={styles.title}>{item.name}</h3>
        <p>
          <span className={styles.quantity}>{item.quantity}x</span>
          <span className={styles.unitPrice}>@ ${item.price.toFixed(2)}</span>
        </p>
      </div>
      <p className={styles.totalPrice}>
        ${(item.price * item.quantity).toFixed(2)}
      </p>
    </div>
  );
}
ConfirmedItem.propTypes = {
  item: PropTypes.object,
};

export default ConfirmedItem;
