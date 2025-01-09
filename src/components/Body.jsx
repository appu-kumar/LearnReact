import { restaurants } from "../utils/constants";
import RestaurantDetails from "./Restaurants";
import { useState, useEffect } from "react";
import { ratings } from "../utils/constants";
const Body = () => {
  // these are the state variables that syncs ui and data
  const [resList, setResList] = useState(restaurants);
  const [rating, setRating] = useState(0);
  const [todos, setTodos] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // it runs once when ui rendered
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTodos(data);
      console.log("inside function", data);
    }
    fetchData();
  }, []);

  if (todos.length === 0) {
    return <p>Loading....</p>; // use skelton instead of this ok
  }

  return (
    <>
      <div
        id="search"
        onClick={() => {
          setResList(restaurants.filter((res) => res.rating > rating));
        }}
      >
        Top rated Restaurants
      </div>

      <div id="rating">
        <select onChange={(e) => setRating(e.target.value)}>
          {ratings.map((rating, idx) => (
            <option key={idx}>{rating}</option>
          ))}
        </select>
      </div>

      <div id="searchByName">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const filteredRest = restaurants.filter((res) =>
              res.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setResList(filteredRest);
          }}
        >
          Search Name
        </button>
      </div>
      {/* <div className="todos">
        {todos.map((todo,idx) => (
          <p key={idx}>{todo.title}</p>
        ))}
      </div> */}

      <div className="restaurants">
        {resList.map((res, idx) => (
          <RestaurantDetails key={idx} res={res} />
        ))}
      </div>
    </>
  );
};

export default Body;
