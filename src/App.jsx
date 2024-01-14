import "./App.css";
import Layout from "./component/layout";

import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
{/* <BrowserRouter>
<Routes>
  <Route path="/categories" element={<Categories />} />
  <Route
    path="/categories/:catName/:a/:b"
    element={<ItemList catName={params.catName} />}
  />
  <Route path="/item/:itemId" element={<ItemDetails itemId={params.itemId} />} />
</Routes>
</BrowserRouter> */}