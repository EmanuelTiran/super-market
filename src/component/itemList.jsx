import React, { useEffect, useState } from "react";
import data from "../data";
import Item from "./item";

import { useParams } from "react-router-dom";


export default function ItemList() {
  const { catName, id } = useParams();
  const [items, setItems] = useState([])

  useEffect(() => {
    // fetch('https://jbh-mockserver.onrender.com/categories/fruits')
    // .then(j=>j.json())
    // .then(data=>setItems(data))
    let idn = parseInt(id);
    setItems(id ? data[catName][idn]: data[catName])
    console.log(items);
    console.log("idn",  idn);
    console.log("id",  id);
  }, [catName])

  return (
    <div className={`${catName} itemList `}    >
      <h1 className="h1">{catName}</h1>
      {items.length ? items.map((f, index) => (
        <Item key={f.id} num={index} fruit={f} catName={catName} />
      )) : <Item fruit={items} catName={catName}/>}
    </div>
  );
}
