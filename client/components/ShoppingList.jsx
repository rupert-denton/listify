import React, { useState } from 'react'

let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`

export default function ShoppingList(props) {
  const [isActive, setIsActive] = useState(false)

  const handleClick = (e) => {
    console.log(isActive)
    if (isActive === true) {
      e.currentTarget.style.backgroundColor = randomColor

      setIsActive((current) => !current)
    } else {
      e.currentTarget.style.backgroundColor = 'white'

      setIsActive((current) => !current)
    }
    // setIsActive((current) => !current)
  }

  const list = props.list.map((listItem, id) => {
    return (
      <div onClick={handleClick} key={id} className="list-item">
        <span>{listItem}</span>
        <span>
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

// style='color:red;text-decoration:line-through
