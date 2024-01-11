import { useState } from "react";

import "./App.css";
import Layout from "./component/layout";
import CartList from "./component/CartList";

function App() {
  const [count, setCount] = useState({});

  return (
    <div className="app">
      <Layout count={count} setCount={setCount} />
      <CartList count={count} setCount={setCount} />
    </div>
  );
}

export default App;
