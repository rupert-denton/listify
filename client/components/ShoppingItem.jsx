import React from 'react'

export default function ShoppingItem(props) {
 delete-button
  const handleDelete = () => {
    // console.log('removing item' + ':' + e.target.value)
  }
  let shoppingList = props.shoppingList.map((element, id) => {

  console.log(props.list)
  let shoppingList = props.list.map((element, id) => {
 main
    return (
      <div key={id} className="list-item">
        <span>{element}</span>
        <span>
          <button onClick={handleDelete}>Delete</button>
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
