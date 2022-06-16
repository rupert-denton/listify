import React from 'react'
import ListContainer from './ListContainer'
import Form from './Form'

function App() {
  return (
    <>
      <div className="title">
        <h1>Listify your Life!</h1>
      </div>

      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <div className="page-container">
          <ListContainer />
        </div>
      </div>
    </>
  )
}

export default App
