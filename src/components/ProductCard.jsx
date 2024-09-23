import PropTypes from "prop-types";

import AddToCartButton from "./AddToCartButton";

import styles from "./ProductCard.module.css";

function ProductCard({ item }) {
  console.log(item);
  return (
    <div>
      <div className={styles.productImageContainer}>
        <picture
          className={`${styles.productImage}  ${
            item.quantity != 0 ? styles.selectedProduct : ""
          }`}
        >
          <source srcSet={item.image.desktop} media="(min-width: 60rem" />
          <source srcSet={item.image.tablet} media="(min-width: 40rem" />
          <img
            className={styles.productImage}
            src={item.image.mobile}
            alt="Waffle with Berries"
          />
        </picture>
        <AddToCartButton quantity={item.quantity} name={item.name} />
      </div>
      <div className={styles.productDescription}>
        <p className={styles.productLabel}>{item.category}</p>
        <h3 className={styles.productTitle}>{item.name}</h3>
        <p className={styles.productPrice}>${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
ProductCard.propTypes = {
  item: PropTypes.object,
};

export default ProductCard;
