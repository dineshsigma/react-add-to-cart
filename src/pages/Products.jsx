import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Overlay from "../components/Overlay";
import Modal from "../components/Modal";
import Footer from "../components/Footer";
import  Checkout  from "../components/CheckOut"

import { DessertOrderDataProvider } from "../contexts/DessertOrderDataContext";

import "../pages/global.css"
import "../pages/reset.css"
import CheckoutComponent from "../components/CheckOutComponent";

// console.log("orderConfirmed",orderConfirmed)

function App() {
  // const { orderConfirmed } = useDessertOrderData();
  return (
    <DessertOrderDataProvider>
      <div className="app-container">
        <ProductList />
        <Cart />
      
      <Footer />
      <Overlay>
        <Modal></Modal>
      </Overlay>
      {/* <CheckoutComponent/> */}
      </div>
    </DessertOrderDataProvider>
  );
}

export default App;
