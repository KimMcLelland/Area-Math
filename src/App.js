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
  const [windLength, setWindLength] = useState(0);

  const ClearNumbers = () => {
    setXdimension(0);
    setZdimension(0);
    setYdimension(0);
    setFloors(0);
    setDoors(0);
    setWindows(0);
    setWindHeight(0);
    setWindLength(0);
    setButtonSelect(0);
  }

  const CalculateResult = () => {
    let widthWalls = (xdimension - 1) * 2
    let lengthWalls = (zdimension - 1) * 2
    let doorSize = doors * 2
    let windowSize = windLength * windHeight * windows
    let floorArea = (xdimension - 2) * (zdimension - 2)

    return(
      <div>
        <p>The amount of blocks you'll need for the external walls are: {((widthWalls + lengthWalls) * ydimension) - doorSize - windowSize}</p>
        <p>The amount of blocks you'll need for the floors are: {floorArea * floors}</p>
        <p>The amount of blocks you'll likely need for the roof are: {(xdimension + 2) * (zdimension + 2)}</p>
        
        <button onClick={() => ClearNumbers()}>Go Again</button>
      </div>
    )
  }

  const UserInterface = () => {
    return (
      <div className="Interface">
        <p>walls: {xdimension} x {zdimension} x {ydimension}</p>
        <p>floors: {floors}</p>
        <p>doors: {doors}</p>
        <p>windows: {windows} windows ({windLength} x {windHeight})</p>
        <p>Please enter the dimensions of your building.</p>
        <p>How many blocks long/deep is your building?</p>
        <button onClick={() => setXdimension(xdimension+1)}>Increase amount</button>
        <p>How many blocks wide is your building?</p>
        <button onClick={() => setZdimension(zdimension+1)}>Increase amount</button>
        <p>How many blocks high is your building?</p>
        <button onClick={() => setYdimension(ydimension+1)}>Increase amount</button>
        <p>How many floors does your building have?</p>
        <button onClick={() => setFloors(floors+1)}>Select amount</button>
        <p>How many doors does your building have?</p>
        <button onClick={() => setDoors(doors+1)}>Select amount</button>
        <p>How many windows does your building have?</p>
        <button onClick={() => setWindows(windows+1)}>Select amount</button>
        <p>How many blocks wide are your windows?</p>
        <button onClick={() => setWindLength(windLength+1)}>Set window width</button>
        <p>How many blocks high are your windows?</p>
        <button onClick={() => setWindHeight(windHeight+1)}>Set window height</button>
        <p>---------------------------------------------------------------</p>
        <button onClick={() => setButtonSelect(1)}>Calculate</button>
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
