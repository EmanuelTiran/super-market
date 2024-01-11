import React, { useState } from "react";

export default function CartItem({cartItem,setCount, count}) {
  const {amount,setAmount} = useState(0);
  let remove = (id) => {
    // סינון האובייקטים שאינם מכילים את ה-id של האובייקט שברצונך להסיר
    let updatedObjects = Object.values(count).filter(item => item.id !== id);
  
    // יצירת אובייקט חדש שמכיל את האובייקטים המעודכנים
    let updatedCount = {};
    updatedObjects.forEach(item => {
      updatedCount[item.id] = item;
    });
  
    // עדכון הסטייט count
    setCount(updatedCount);
  };
  return (
    <div key={cartItem.id} className="cart">
      <h2>{cartItem.name}</h2>
      <p>{cartItem.emoji}</p>
      <p>Price: ${cartItem.price}</p>
      <p>Amount:{cartItem.amount}</p>
      <button onClick={()=>remove(cartItem.id)} >remove</button>
    </div>
  );
}
