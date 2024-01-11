import React from "react";
import { useState } from "react";
import DataContext from "./DataContext";
import { useContext } from "react";
export default function Item({ fruit }) {
  const [amount, setAmount] = useState(0);
  const { cart, setCart } = useContext(DataContext);

  const plus = () => {
    setAmount(amount + 1);
    setCart({ ...cart, [fruit.id]: { ...fruit, amount: amount + 1 } })
  };

  const minus = () => {
    if (amount > 0) {
      setAmount(amount - 1);
      setCart({ ...cart, [fruit.id]: { ...fruit, amount: amount - 1 } })
    }
  };

  return (
    <div key={fruit.id} className="item">
      <h2>{fruit.name}</h2>
      <p>Emoji: {fruit.emoji}</p>
      <p>Price: ${fruit.price}</p>
      <img
        src={fruit.image}
        alt={fruit.name}
        style={{ width: "100px", height: "100px" }}
      />
      <button onClick={() => plus()}>+</button>
      <span>{cart[fruit.id] ? cart[fruit.id].amount : 0}</span>
      <button onClick={() => minus()}>-</button>
    </div>
  );
}
