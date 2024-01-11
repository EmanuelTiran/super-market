import React, { useState } from "react";
import DataContext from "./DataContext";
import { useContext } from "react";
export default function CartItem({ cartItem }) {
  const {cart ,setCart} = useContext(DataContext);
  const { amount, setAmount } = useState(0);
  let remove = (id) => {
    // סינון האובייקטים שאינם מכילים את ה-id של האובייקט שברצונך להסיר
    let updatedObjects = Object.values(cart).filter(item => item.id !== id);
    // יצירת אובייקט חדש שמכיל את האובייקטים המעודכנים
    let updatedCount = {};
    updatedObjects.forEach(item => {
      updatedCount[item.id] = item;
    });
    // עדכון הסטייט cart
    setCart(updatedCount);
  };

  const plus = (id) => {
    if (cart[id]) {
          let newCart = {...cart};
          newCart[id].amount+=1;
          setCart(newCart);
    }
  }
  const minus = (id) => {
    if (cart[id]) {
          let newCart = {...cart};
          if (newCart[id].amount===1) {
            delete newCart[id];
            return setCart(newCart);
          }
          newCart[id].amount-=1;
          setCart(newCart);
    }

  };
  return (
    <div key={cartItem.id} className="cart">
      <h2>{cartItem.name}</h2>
      <p>{cartItem.emoji}</p>
      <p>Price: ${cartItem.price}</p>
      <p>Amount:{cartItem.amount}</p>
      <button onClick={() => plus(cartItem.id)}>+</button>
      <button onClick={() => remove(cartItem.id)} >remove</button>
      <button onClick={() => minus(cartItem.id)}>-</button>
    </div>
  );
}
