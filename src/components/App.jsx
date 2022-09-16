import React, { useState } from "react";

function App() {
  //Challenge:
  //1. Given that you can get the current time using:
  const [time, newTime] = useState(new Date().toLocaleTimeString());
  var currentTime = time;
  console.log(time);

  //Show the latest time in the <h1> when the Get Time button
  //is pressed.

  //2. Given that you can get code to be called every second
  //using the setInterval method.
  //Can you get the time in your <h1> to update every second?

  //e.g. uncomment the code below to see Hey printed every second.
  // function sayHi() {
  //   console.log("Hey");
  // }
  // setInterval(sayHi, 1000);
  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button
        className="btn btn-warning"
        onClick={setInterval(() => newTime((currentTime = new Date().toLocaleTimeString())),1000)}
      >
        Get Time
      </button>
    </div>
  );
}

export default App;
