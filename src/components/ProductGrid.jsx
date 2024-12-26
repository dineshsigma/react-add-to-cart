import ProductCard from "./ProductCard";
import React, { useEffect, useState } from "react";


import styles from "./ProductGrid.module.css";

import { useDessertOrderData } from "../contexts/DessertOrderDataContext";

function ProductGrid() {
  const { items } = useDessertOrderData();
  return (
    <div className={styles.productGrid}>
      {items.map((item) => (
        <ProductCard item={item} key={item.name} />
      ))}
    </div>
  );
}

export default ProductGrid;
