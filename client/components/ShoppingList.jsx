import React, { useState } from 'react'

let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`

export default function ShoppingList(props) {
  // let updatedList = props.list.map((item) => {
  //   let newItem = { name: item, isActive: false }
  //   return newItem
  // })
  // console.log(updatedList)
  // const [shoppingItems, setShoppingItems] = useState(updatedList)
  console.log(props.list)
  const handleClick = (name, e) => {
    const currentListItem = props.list.find((item) => item.name === name)

    const indexOfListItem = props.list.indexOf(currentListItem)
    currentListItem.isActive = !currentListItem.isActive
    const newList = [...props.list]
    newList[indexOfListItem] = currentListItem
    props.onListChange(newList)
    // props.onHandleList(newList)
    // console.log(props.list)

    // if (isActive === true) {
    //   e.currentTarget.style.backgroundColor = randomColor

    //   setIsActive((current) => !current)
    // } else {
    //   e.currentTarget.style.backgroundColor = 'white'

    //   setIsActive((current) => !current)
    // }
    // setIsActive((current) => !current)
  }

  const list = props.list.map((listItem, id) => {
    return (
      <div key={id}>
        <div
          onClick={() => handleClick(listItem.name)}
          // key={id}
          className="list-item"
          name={listItem.name}
          style={
            listItem.isActive
              ? { backgroundColor: randomColor }
              : { backgroundColor: 'White' }
          }
        >
          <span>{listItem.name}</span>
        </div>
        <span>
          <button onClick={() => props.onDelete(listItem.name)}>Delete</button>
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
