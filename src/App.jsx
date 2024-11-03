import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Overlay from "./components/Overlay";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

import { DessertOrderDataProvider } from "./contexts/DessertOrderDataContext";

import "./global.css";
import "./reset.css";

function App() {
  return (
    <DessertOrderDataProvider>
      <div className="app-container">
        <ProductList />
        <Cart />
      </div>
      <Footer />
      <Overlay>
        <Modal />
      </Overlay>
    </DessertOrderDataProvider>
  );
}

export default App;
