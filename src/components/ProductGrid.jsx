import ProductCard from "./ProductCard";

import styles from "./ProductGrid.module.css";

import { useDessertOrderData } from "../contexts/DessertOrderDataContext";

function ProductGrid() {
  const { items } = useDessertOrderData();

  console.log(items);

  return (
    <div className={styles.productGrid}>
      {items.map((item) => (
        <ProductCard item={item} key={item.name} />
      ))}
    </div>
  );
}

export default ProductGrid;
