import React from "react";
import Overlay from "./Overlay";
import Modal from "./Modal";
import Checkout from "./CheckOut";
import { useDessertOrderData } from "../contexts/DessertOrderDataContext";
import { DessertOrderDataProvider } from "../contexts/DessertOrderDataContext";
function CheckoutComponent() {
    const { orderConfirmed } = useDessertOrderData(); // Now this is safe
    console.log(orderConfirmed,"orderConfirmed")
    return (
      <>
       <DessertOrderDataProvider>
       {orderConfirmed ? <Checkout /> :  ""
        }

       </DessertOrderDataProvider>
        
       
      </>
    );
  }


  
export default CheckoutComponent;