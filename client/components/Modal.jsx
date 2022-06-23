import React from 'react'

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h4 className="modal-title">Modal title</h4>
      </div>
      <div className="modal-body">this is modal content</div>
      <div className="modal-footer">
        <button className="button">close</button>
      </div>
    </div>
  )
}

export default Modal
