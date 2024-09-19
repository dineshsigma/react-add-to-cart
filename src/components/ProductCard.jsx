import mobileImage from "../assets/images/image-waffle-mobile.jpg";
import tabletImage from "../assets/images/image-waffle-tablet.jpg";
import desktopImage from "../assets/images/image-waffle-desktop.jpg";

import AddToCartButton from "./AddToCartButton";

import styles from "./ProductCard.module.css";

function ProductCard() {
  return (
    <div>
      <div className={styles.productImageContainer}>
        <picture className={styles.productImage}>
          <source srcSet={desktopImage} media="(min-width: 60rem" />
          <source srcSet={tabletImage} media="(min-width: 40rem" />
          <img
            className={styles.productImage}
            src={mobileImage}
            alt="Waffle with Berries"
          />
        </picture>
        <AddToCartButton />
      </div>
      <div className={styles.productDescription}>
        <p className={styles.productLabel}>Waffle</p>
        <h3 className={styles.productTitle}>Waffle with Berries</h3>
        <p className={styles.productPrice}>$6.50</p>
      </div>
    </div>
  );
}

export default ProductCard;
