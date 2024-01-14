import React, { useState } from 'react'
import Content from './content';
import CartList from './CartList';
import DataContext from './DataContext';
export default function Layout() {
  const [cart, setCart] = useState({});
  return (
    <>
      <h1>super market</h1>
      <DataContext.Provider value={{ cart, setCart }}>
        <Content />
        <CartList />
      </DataContext.Provider>

    </>)
}
