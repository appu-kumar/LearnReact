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

import React from "react";
import ReactDOM from "react-dom/client";

// this can be very complex(for user to write the code) if html structure is complex
// React.createElement---->React element(js object eventually or virtual dom)---->render convert this into html
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
// if you run through live server in vs it will not run because js does not know the below syntax but parcel(babel knows very well)
// babel is js complier
// below code is jsx-------by babel------->React Element(js object)--------by ReactDOM means render method -------->HTML Element
// user friendly as compare just above code
// jsx is not part of the react ok
const jsxDivMain = (
  <div id="main-container">
    <div id="container">
      <h1> I am inside the h1 with jsx</h1>
      <h2> I am inside the h2 </h2>
    </div>

    <div id="container">
      <h1> I am inside the h1 </h1>
      <h2> I am inside the h2 </h2>
    </div>
  </div>
);



// React component  --> It is a javascript function which returns the jsx 
// 1)functional component  2)Class based component older one
const Title = () => {

    return (
        <h1>Title I Am Appu Kumar</h1>
    )
}

const Heading = () => {
    return (
        <>
        <Title />
        <div className="raju">Address Delhi</div>
       </>
    )
}

// console.log(divMain); // this is the js object means virtual dom is js object
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<Heading />); // it compares virtual dom and real dom   basically it converts React Element into HTML Element
