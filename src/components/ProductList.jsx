import ProductGrid from "./ProductGrid";

import styles from "./ProductList.module.css";
import Modal from "./Modal";
import React,{useEffect, useState} from "react";

function ProductList() {

  const [showProduct, setShowProduct] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]); // State to hold selected items

  const handleCheckout = (items) => {
    setSelectedItems(items); // Set the selected items
    setShowProduct(true); // Show the Product component
  };

  useEffect(()=>{

  },[showProduct])

  return (
    <div className={styles.productSection}>
      <h2 className={styles.gridTitle}>Products</h2>
      {!showProduct ? <ProductGrid /> : <Modal onCheckout={handleCheckout} />}
      
      {/* {isModalVisible && <Modal />} */}
    </div>
  );
}

export default ProductList;
