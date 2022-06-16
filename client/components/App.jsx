import React, { useState } from 'react'
import Form from './Form'
import ShoppingItem from './ShoppingItem'

function App() {
  const [list, setList] = useState([])

  function handleAddItem(newItem) {
    setList([...list, newItem])
  }

  function handleDelete() {
    const newList = list.filter((x) => x.id !== list.id)
    setList([...newList])
  }

  return (
    <>
      <div className="main">
        <div className="page-container">
          <Form handleAddItem={handleAddItem} />
          <div className="list-container">
            <div className="list-item-container">
 delete-button
              {/* shopping item component goes here */}
              <ShoppingItem onClick={handleDelete} shoppingList={list} />

              <ShoppingItem list={list} />
main
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
