import React, { useState } from 'react'

export default function ListContainer(props) {
  const [newItem, setNewItem] = useState('')
  const { handleAddItem } = props

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddItem(newItem) //gives the list item back to app.jsx (to put in the list with the spread operator)
    setNewItem('')
  }

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <span>
            <input
              className="item-input"
              type="text"
              required
              value={newItem}
              onChange={(e) => {
                setNewItem(e.target.value)
              }}
            ></input>
            <button type="submit" className="add">
              Add
            </button>
          </span>
        </form>
      </div>
    </>
  )
}
