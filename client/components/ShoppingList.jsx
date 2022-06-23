import React, { useState } from 'react'

let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`

export default function ShoppingList(props) {
  console.log(props.list)
  const handleClick = (name, e) => {
    const currentListItem = props.list.find((item) => item.name === name)

    const indexOfListItem = props.list.indexOf(currentListItem)
    currentListItem.isActive = !currentListItem.isActive

    const newList = [...props.list]
    newList[indexOfListItem] = currentListItem
    props.onListChange(newList)
  }

  const list = props.list.map((listItem, id) => {
    return (
      <div className="item-box" key={id}>
        <div
          onClick={() => handleClick(listItem.name)}
          className="list-item"
          name={listItem.name}
          style={
            listItem.isActive
              ? { backgroundColor: randomColor }
              : { backgroundColor: 'White' }
          }
        >
          <span>{listItem.name}</span>
          <span>
            <button onClick={() => props.onDelete(listItem.name)}>?</button>
          </span>
        </div>
        <span>
          <button onClick={() => props.onDelete(listItem.name)}>x</button>
        </span>
      </div>
    )
  })

  return (
    <>
      <div className="list-container">
        <div className="list-item-container">{list}</div>
      </div>
    </>
  )
}

// style='color:red;text-decoration:line-through
