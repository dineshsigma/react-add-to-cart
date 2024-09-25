import PropTypes from "prop-types";

import { useDessertOrderData } from "../contexts/DessertOrderDataContext";

import styles from "./Overlay.module.css";

function Overlay({ children }) {
  const { orderConfirmed } = useDessertOrderData();
  return orderConfirmed ? (
    <div className={styles.overlay}>{children}</div>
  ) : null;
}
Overlay.propTypes = {
  children: PropTypes.node,
};

export default Overlay;
