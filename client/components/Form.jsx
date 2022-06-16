import React, { useState } from 'react'

export default function ListContainer(props) {
  const [newItem, setNewItem] = useState('')

  const { onAddItem } = props

  const handleSubmit = (e) => {
    //new item = cheese
    e.preventDefault()
    onAddItem(newItem) //gives the list item back to app.jsx (to put in the list with the spread operator)
    setNewItem('')
  }

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <span>
            <input
              type="text"
              className="item-input"
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
