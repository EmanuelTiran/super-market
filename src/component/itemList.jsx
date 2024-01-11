import React from "react";
import data from "../data";
import Item from "./item";
export default function ItemList({setCount, count}) {
  return (
    <div className="itemList">
      <h1>Fruits & vegetables</h1>
      {data.fruits.map((fruit, index) => (
        <Item num={index} fruit={fruit} count={count} setCount={setCount}/>
      ))}
    </div>
  );
}
