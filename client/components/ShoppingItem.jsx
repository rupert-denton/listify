import React from 'react'

export default function ShoppingItem(props) {
  return (
    <>
      <div className="list-container">
        <div className="list-item-container">{props.shoppingList}</div>
      </div>
    </>
  )
}
