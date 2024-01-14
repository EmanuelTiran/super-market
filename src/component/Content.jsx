import React from "react";
// import Header from "./header";
import { Route, Routes } from "react-router-dom";
import Categories from "./categories";
import ItemList from "./ItemList";
export default function Content() {
  return (
    <Routes>

      <Route path="/categories" element={<Categories/>} />
      <Route path="/categories/:catName" element={<ItemList />} />
     
    </Routes>
  );
}
