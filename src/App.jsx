import "./global.css";
import "./reset.css";

import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="app-container">
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
