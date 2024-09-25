import PropTypes from "prop-types";

import styles from "./Overlay.module.css";

function Overlay({ children }) {
  return <div className={styles.overlay}>{children}</div>;
}
Overlay.propTypes = {
  children: PropTypes.node,
};

export default Overlay;
