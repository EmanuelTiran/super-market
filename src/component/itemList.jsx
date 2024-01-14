import React, { useEffect, useState } from "react";
import data from "../data";
import Item from "./item";

import { useParams } from "react-router-dom";


export default function ItemList() {
  const { catName } = useParams();
  const [items,setItems ] = useState([])

  useEffect(()=>{
    // fetch('https://jbh-mockserver.onrender.com/categories/fruits')
    // .then(j=>j.json())
    // .then(data=>setItems(data))

    setItems(data[catName])
  },[])
  return (
    <div className="itemList">
      <h1>Fruits & vegetables</h1>
      {items.map((f, index) => (
        <Item key={f.id} num={index} fruit={f}/>
      ))}
    </div>
  );
}
