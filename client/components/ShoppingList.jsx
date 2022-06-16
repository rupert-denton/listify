import React from 'react'

export default function ShoppingList(props) {
  // shoppingList = ['cheese', 'eggs']
  console.log(props.children)
  const list = props.list.map((listItem, id) => {
    console.log(props.list)
    return (
      <div key={id} className="list-item">
        <span>{listItem}</span>
        <span>
          {/* this is an anonymous function */}
          <button onClick={() => props.onDelete(listItem)}>Delete</button>
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
