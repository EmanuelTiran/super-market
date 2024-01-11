import React, { useContext, useEffect, useState } from "react";
import CartItem from "./cartItem";
import DataContext from "./DataContext";

export default function CartList() {
  const { cart } = useContext(DataContext);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let calculatedTotalAmount = 0;
    Object.values(cart).forEach(item => {
      calculatedTotalAmount += item.amount;
    });
    let bbb = 0;
    setTotalAmount(calculatedTotalAmount);
  }, [cart]);

  return (
    <div className="cartList">
      <h4>CartList</h4>
      <div>
        {Object.values(cart).map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        <div className="total">Total: {totalAmount}</div>
      </div>
    </div>
  );
}
