import React from "react";
import { useState } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <div className="user">
        <p>{props.title}</p>
        <p>count:{count}</p>
        <p>count2:{count2}</p>
        <button onClick={()=> setCount(count+1)}>increaseCount</button>
        <h1>Appu Kumar from function component</h1>
        <h3>appu6688kumar@gmail.com</h3>
        <h2>Delhi</h2>
      </div>
    </>
  );
};

export default User;
