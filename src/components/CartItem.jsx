import PropTypes from "prop-types";

import IconRemoveItem from "../assets/images/IconRemoveItem.svg";

import styles from "./CartItem.module.css";

import { useDessertOrderData } from "../contexts/DessertOrderDataContext";

function CartItem({ item }) {
  const { dispatch } = useDessertOrderData();

  return (
    <li className={styles.cartItem}>
      <div>
        <h3 className={styles.title}>{item.name}</h3>
        <p>
          <span className={styles.quantity}>{item.quantity}x</span>
          <span className={styles.unitPrice}>@ ${item.price.toFixed(2)}</span>
          <span className={styles.totalPrice}>
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </p>
      </div>
      <button
        className={styles.removeBtn}
        onClick={() => dispatch({ type: "clearItem", payload: item.name })}
      >
        <IconRemoveItem />
      </button>
    </li>
  );
}
CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
