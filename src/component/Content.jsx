import React from "react";
// import Header from "./header";
import { Route, Routes } from "react-router-dom";
import Categories from "./categories";
import ItemList from "./ItemList"
export default function Content() {
  return (<>
    <Categories />
    <Routes>
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:catName" element={<ItemList />} />
      <Route path="/categories/:catName/:id" element={<ItemList />} />
    </Routes></>
  );
}
