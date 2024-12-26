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
        {/* <IconRemoveItem /> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
      </button>
    </li>
  );
}
CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
