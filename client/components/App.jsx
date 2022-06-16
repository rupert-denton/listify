import React, { useState } from 'react'
import Form from './Form'
import ShoppingItem from './ShoppingItem'

function App() {
  const [list, setList] = useState([])

  function handleAddItem(newItem) {
    setList([...list, newItem])
  }

  return (
    <>
      <div className="title">
        <h1>Listify your Life!</h1>
      </div>
      <div className="main">
        <div className="page-container">
          <Form onAddItem={handleAddItem} />
          <div className="list-container">
            <div className="list-item-container">
              {/* shopping item component goes here */}
              <ShoppingItem shoppingList={list} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
