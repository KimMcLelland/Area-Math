import React, { useState, useEffect } from "react";
import './App.css';

const App = () => {
  const [buttonSelect, setButtonSelect] = useState(0);
  const [xdimension, setXdimension] = useState(0);
  const [zdimension, setZdimension] = useState(0);
  const [ydimension, setYdimension] = useState(0);
  const [floors, setFloors] = useState(0);
  const [doors, setDoors] = useState(0);
  const [windows, setWindows] = useState(0);
  const [windHeight, setWindHeight] = useState(0);
  const [windWidth, setWindWidth] = useState(0);

  const ClearNumbers = () => {
    setXdimension(0);
    setZdimension(0);
    setYdimension(0);
    setFloors(0);
    setDoors(0);
    setWindows(0);
    setWindHeight(0);
    setWindWidth(0);
    setButtonSelect(0);
  }

  const CalculateResult = () => {
    let widthWalls = (xdimension - 1) * 2
    let lengthWalls = (zdimension - 1) * 2
    let doorSize = doors * 2
    let windowSize = windWidth * windHeight * windows
    let floorArea = (xdimension - 2) * (zdimension - 2)

    return(
      <div>
        <p>The amount of blocks you'll need for the external walls are: {((widthWalls + lengthWalls) * ydimension) - doorSize - windowSize}</p>
        <p>The amount of blocks you'll need for the floors are: {floorArea * floors}</p>
        <p>The amount of blocks you'll likely need for the roof are: {(xdimension + 2) * (zdimension + 2)}</p>
        <div className="page_bottom">
          <button onClick={() => ClearNumbers()}>Go Again</button>
        </div>
      </div>
    )
  }

  const wallDimensions = () => {
    return(
      <div>
        <div className = "question">
          <p>How many blocks long/deep is your building?</p>
          <div className = "numbers">
            <p>{xdimension}</p>
            <div className = "buttons">
              <button onClick={() => setXdimension(xdimension+1)}>+</button>
              <button onClick={() => setXdimension(xdimension-1)}>-</button> 
            </div>
          </div>
        </div>

        <div className="question">
          <p>How many blocks wide is your building?</p>
          <div className="numbers">
            <p>{zdimension}</p>
            <div className="buttons">
              <button onClick={() => setZdimension(zdimension+1)}>+</button>
              <button onClick={() => setZdimension(zdimension-1)}>-</button>
            </div>
          </div>
        </div>

        <div className="question">
          <p>How many blocks high is your building?</p>
          <div className="numbers">
            <p>{ydimension}</p>
            <div className="buttons">
              <button onClick={() => setYdimension(ydimension+1)}>+</button>
              <button onClick={() => setYdimension(ydimension-1)}>-</button>
            </div>
          </div>
        </div>
        
        <p>-------------------------------------------------------------------------</p>
        <div className="page_bottom">
          <button onClick={() => setButtonSelect(0)}>Submit</button>
        </div>
      </div>
    )
}

  const floorsAndDoors = () => {
    return(
      <div>
        <div className="question">
          <p>How many floors does your building have?</p>
          <div className="numbers">
            <p>{floors}</p>
            <div className = "buttons">
              <button onClick={() => setFloors(floors+1)}>+</button>
              <button onClick={() => setFloors(floors-1)}>-</button>
            </div>
          </div>
        </div>

        <div className="question">
          <p>How many doors does your building have?</p>
          <div className="numbers">
            <p>{doors}</p>
            <div className = "buttons">
              <button onClick={() => setDoors(doors+1)}>+</button>
              <button onClick={() => setDoors(doors-1)}>-</button>
            </div>
          </div>
        </div>

        <p>-------------------------------------------------------------------------</p>
        <div className="page_bottom">
          <button onClick={() => setButtonSelect(0)}>Submit</button>
        </div>
      </div>
    )

  }

  const windowDimensions = () => {
    return(
      <div>
        <div className = "question">
          <p>How many windows does your building have?</p>
          <div className = "numbers">
            <p>{windows}</p>
            <div className = "buttons">
              <button onClick={() => setWindows(windows+1)}>+</button>
              <button onClick={() => setWindows(windows-1)}>-</button>
            </div> 
          </div>
        </div>

        <div className = "question">
          <p>How many blocks wide are your windows?</p>
          <div className = "numbers">
            <p>{windWidth}</p>
            <div className="buttons">
              <button onClick={() => setWindWidth(windWidth+1)}>+</button>
              <button onClick={() => setWindWidth(windWidth-1)}>-</button>
            </div>
          </div>
        </div>
        
        <div className = "question">
          <p>How many blocks high are your windows?</p>
          <div className = "numbers">
            <p>{windHeight}</p>
            <div className="buttons">
            <button onClick={() => setWindHeight(windHeight+1)}>+</button>
            <button onClick={() => setWindHeight(windHeight-1)}>-</button>
            </div> 
          </div>
        </div>
        
        <p>-------------------------------------------------------------------------</p>
        <div className="page_bottom">
          <button onClick={() => setButtonSelect(0)}>Submit</button>
        </div>
      </div>
    )

  }

  const UserInterface = () => {
    return (
      <div className="Interface">
        <p>walls: {xdimension} x {zdimension} x {ydimension}</p>
        <p>floors: {floors}</p>
        <p>doors: {doors}</p>
        <p>windows: {windows} windows ({windWidth} x {windHeight})</p>
        <p>Please enter the dimensions of your building:</p>
        <button onClick={() => setButtonSelect(1)}>Walls</button>
        <button onClick={() => setButtonSelect(2)}>Floors and Doors</button>
        <button onClick={() => setButtonSelect(3)}>Windows</button>
        <p>---------------------------------------------------------------</p>
        <div className="page_bottom">
          <button onClick={() => setButtonSelect(4)}>Calculate</button>
        </div>
      </div>
    );
  }

  const pageSelect = () => {
    if (buttonSelect == 0) {
      return(
      <div>
        {UserInterface()}
      </div>
    )
  }
    if (buttonSelect == 1) {
      return(
      <div>
        {wallDimensions()}
      </div>
    )
  }
    if (buttonSelect == 2) {
      return(
      <div>
        {floorsAndDoors()}
      </div>
    )
  }
    if (buttonSelect == 3) {
      return(
      <div>
        {windowDimensions()}
      </div>
    )
  }
    if (buttonSelect == 4) {
      return(
        <div>
        {CalculateResult()}
        </div>
      )
    }
  }

  return (
    <div className="App">
      <div className="Intro">
        <h1>Welcome to the Minecraft Area Math calculator</h1>
        <h2>At present this app only calculates for simple rectangular buildings</h2>
        <h2>and only calculates the external walls.</h2>
      </div>
      <div className="MainSection">
        {pageSelect()}
      </div>
    
    </div>
  )
  
}

export default App;
