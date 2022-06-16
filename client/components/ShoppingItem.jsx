import React from 'react'

export default function ShoppingItem(props) {
  console.log(props.list)
  let shoppingList = props.list.map((element, id) => {
    return (
      <div key={id} className="list-item">
        <span>{element}</span>
        <span>
          <button>Delete</button>
        </span>
      </div>
    )
  })

  return (
    <>
      <div className="list-container">
        <div className="list-item-container">{shoppingList}</div>
      </div>
    </>
  )
}
