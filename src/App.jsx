import { useState } from "react";

import "./App.css";
import Layout from "./component/layout";
import CartList from "./component/CartList";
import DataContext from "./component/DataContext";
function App() {
  const [cart, setCart] = useState({});

  return (
    <div className="app">
      <DataContext.Provider value={{ cart, setCart }}>
        <Layout  />
        <CartList />
      </DataContext.Provider>
    </div>
  );
}

export default App;
