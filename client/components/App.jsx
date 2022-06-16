import React, { useState } from 'react'
import Form from './Form'

function App() {
  const [list, setList] = useState(['Eggs'])

  function handleAddItem(newItem) {
    setList([...list, newItem])
  }

  return (
    <>
      <div className="title">
        <h1>Listify your Life!</h1>
      </div>

      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <div className="page-container">
          <Form onAddItem={handleAddItem} />
          <div className="list-container">
            <div className="list-item-container">
              <h3>Your List </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
