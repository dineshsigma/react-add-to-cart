import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

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
    </DessertOrderDataProvider>
  );
}

export default App;
