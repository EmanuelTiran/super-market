import React from 'react'
import Header from './header';
import Content from './content';
import ItemList from './itemList';
export default function Layout({count,setCount }) {
  return (
<ItemList count={count} setCount={setCount} />  )
}
