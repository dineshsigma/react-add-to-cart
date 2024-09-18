import image from "../assets/images/image-waffle-mobile.jpg";

import styles from "./ProductCard.module.css";

function ProductCard() {
  return (
    <div>
      <div className={styles.productImageContainer}>
        <img
          className={styles.productImage}
          src={image}
          alt="Waffle with Berries"
        />
        <button>
          <p>Add to Cart</p>
        </button>
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
