import React from 'react'

const Modal = (props) => {
  if (!props.show) {
    return null
  }

  return (
    <div className="modal">
      <div className="pokedex-container">
        <div className="pokedex-screen-container">
          <div className="pokedex-top">
            <div className="pokedex-lights">
              <div className="main-light"></div>
              <div className="small-light-container">
                <div className="small-light red"></div>
                <div className="small-light yellow"></div>
                <div className="small-light green"></div>
              </div>
            </div>
          </div>
          <div className="pokedex-mid">
            <div className="screen-container">
              <div className="screen">
                <img src="images/cubone.jpeg" className="image-body" />
                {/* pokemon image to go in here */}
              </div>
            </div>
          </div>
          <div className="pokedex-bottom">
            <div className="first-third a">
              <div className="joystick"></div>
              <div className="rectangle-buttons"></div>
            </div>
            <div className="second-third a">
              <div className="thin-buttons">
                <div className="red-button b"></div>
                <div className="blue-button b"></div>
              </div>
              <div className="rectangle-div">
                <div className="rectangle"></div>
              </div>
            </div>
            <div className="third-third a">
              <div className="dpad">
                <div className="dpad1"></div>
                <div className="dpad2"></div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={props.onClose} className="button">
              Close
            </button>
          </div>
        </div>
        <div className="pokedex-hinge"></div>

        {/* Right panel */}
        <div className="pokedex-right-panel">
          {/* Blank top bar */}
          <div className="empty-top-bar"></div>
          {/* Stat screen */}
          <div className="stat-screen-container">
            <div id="stat-screen" className="stat-screen">
              <p>Height</p> {/* to include data from API */}
              <p>Weight</p> {/* to include data from API */}
            </div>
          </div>
          {/* Square buttons */}
          <div className="square-buttons-container">
            <div className="ability-buttons-container">
              <div className="ability-button"></div>
              <div className="ability-button"></div>
              <div className="ability-button"></div>
              <div className="ability-button"></div>
              <div className="ability-button"></div>
              <div className="ability-button"></div>
              <div className="ability-button"></div>
              <div className="ability-button"></div>
              <div className="ability-button"></div>
              <div className="ability-button"></div>
            </div>
          </div>
          {/* Center buttons */}
          <div className="center-buttons-container">
            <div className="center-left-container">
              <div className="red-dots-container">
                <div className="red-dot">
                  <div className="small-light-red"></div>
                </div>
                <div className="red-dot">
                  <div className="small-light-red"></div>
                </div>
              </div>
              <div className="white-square-container"></div>
            </div>
            <div className="center-right-container"></div>
          </div>
          {/*  */}
          <div className=""></div>
        </div>
      </div>
    </div>
  )
}

export default Modal
