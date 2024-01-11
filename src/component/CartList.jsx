import React from "react";
import CartItem from "./cartItem";
export default function CartList({ setCount, count }) {
  return (
    <div className="cartList">
      <h4>CartList</h4>
      <div>
      {Object.values(count).map((item) => (
        <CartItem key={item.id} cartItem={item}  count={count} setCount={setCount}/>
      ))}
    </div>
    </div>
  );
}
