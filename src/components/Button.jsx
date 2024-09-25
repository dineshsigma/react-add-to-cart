import PropTypes from "prop-types";

import styles from "./Button.module.css";

function Button({
  text = "Clck here",
  onClick = () => {
    console.log("Click");
  },
  className = "",
}) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${className}`}>
      {text}
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
