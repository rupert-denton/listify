import React from 'react'
import useFetch from './useFetch'

const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/cubone`)

const Modal = (props) => {
  if (!props.show) {
    return null
  }

  

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Modal title</h4>
        </div>
        <div className="modal-body">This is modal content</div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="button">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
