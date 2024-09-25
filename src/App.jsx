import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Overlay from "./components/Overlay";
import Modal from "./components/Modal";

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
      <Overlay>
        <Modal />
      </Overlay>
    </DessertOrderDataProvider>
  );
}

export default App;
