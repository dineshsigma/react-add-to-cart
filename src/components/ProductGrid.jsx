import ProductCard from "./ProductCard";

import styles from "./ProductGrid.module.css";

function ProductGrid() {
  return (
    <div className={styles.productGrid}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default ProductGrid;
