import React from 'react'
import Form from './Form'
import ShoppingItem from './ShoppingItem'

function ListContainer() {
  //map shopping item based on props passed in
  return (
    <>
      <div className="list-container">
        <div className="list-item-container">
          <Form />
          <h3>Your List </h3>
        </div>
      </div>
    </>
  )
}

export default ListContainer
