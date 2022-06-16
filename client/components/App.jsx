import React, { useState } from 'react'
import Form from './Form'
import ShoppingList from './ShoppingList'

function App() {
  const [list, setList] = useState([])

  function handleAddItem(newItem) {
    setList([...list, newItem])
  }
  // 'cheese'
  function handleDelete(itemIWantToDelete) {
    // ['cheese', 'eggs']
    const newList = list.filter((item) => item !== itemIWantToDelete)
    setList([...newList])
  }

  return (
    <>
      <div className="main">
        <div className="page-container">
          <Form handleAddItem={handleAddItem} />
          <ShoppingList onDelete={handleDelete} list={list} />
        </div>
      </div>
    </>
  )
}

export default App
