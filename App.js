/*
    npm is a package manager it is a reservior
    npm scan package.json and install the dependencies of the projects that's it
    1)npm init    to make project npm understandable
    2)npm install -D parcel   (It is development package )   Parcel is a web application bundler that can be used to build React applications:

   // this is easy
   <div id="main-container">
        <div id="container">
             <h1> I am inside the h1   </h1>
             <h2> I am inside the h2  </h2>
        </div>

         <div id="container">
             <h1> I am inside the h1   </h1>
             <h2> I am inside the h2  </h2>
        </div>
   </div>

*/

import React from 'react'
import ReactDOM from 'react-dom/client'

// this can be very complex(for user to write the code) if html structure is complex
const divMain = React.createElement(
  // virtual dom is ready
  "div",
  { id: "main-container" },
  [
    React.createElement("div", { id: "container" }, [
      React.createElement("h1", {}, "I am inside the h1"),
      React.createElement("h2", {}, "I am inside the h2"),
    ]),
    React.createElement("div", { id: "container" }, [
      React.createElement("h1", {}, "I am inside the h1"),
      React.createElement("h2", {}, "I am inside the h2"),
    ]),
  ]
); // responsible to create virtual dom


// Above code can be complex for user that is why jsx came into picture.

// console.log(divMain); // this is the js object means virtual dom is js object
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(divMain); // it compares virtual dom and real dom
