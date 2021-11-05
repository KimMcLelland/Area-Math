import React, { useState, useEffect } from "react";
import './App.css';

const App = () => {
  const [xdimension, setXdimension] = useState(0);
  const [zdimension, setZdimension] = useState(0);
  const [ydimension, setYdimension] = useState(0);
  const [floors, setFloors] = useState(0);
  const [doors, setDoors] = useState(0);
  const [windows, setWindows] = useState(0);
  return (
    <div className="App">
      <h1>Welcome to the Minecraft Area Math calculator</h1>
      <h2>At present this app only calculates for simple rectangular buildings</h2>
      <h2>and only calculates the external walls.</h2>
      <p>walls: {xdimension} x {zdimension} x {ydimension}</p>
      <p>floors: {floors}</p>
      <p>doors: {doors}</p>
      <p>windows: {windows}</p>
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
      <p>How many blocks high are your windows?</p>
    </div>
  );
}

export default App;
