import ProductGrid from "./ProductGrid";

import styles from "./ProductList.module.css";

function ProductList() {
  return (
    <div className={styles.productSection}>
      <h2 className={styles.gridTitle}>Desserts</h2>
      <ProductGrid />
    </div>
  );
}

export default ProductList;
