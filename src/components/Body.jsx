import { restaurants } from "../utils/constants";
import RestaurantDetails from "./RestaurantDetails";
import { useState, useEffect, useContext } from "react";
import { ratings } from "../utils/constants";
import { Link } from "react-router";
import { withPromotedRestaurantDetails } from "./HOCRestaurantDetails";
import { UserContext } from "../utils/UserContext";
const Body = () => {
  // these are the state variables that syncs ui and data
  const [resList, setResList] = useState(restaurants);
  const [rating, setRating] = useState(0);
  const [todos, setTodos] = useState([]);
  const [searchText, setSearchText] = useState("");
  const userData = useContext(UserContext);

  // No depedency array---> It(compoenent) will be called EVERY time when any state variable change
  // []  -----------------> It will be called only ONCE after when this component called(first time rendered)
  // [searchText] --------> It will be called (second point) and when searchText will get updation
  // useEffect(() => {
  //   // it runs once when ui rendered
  //   console.log('after rendering')
  //   async function fetchData() {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     const data = await res.json();
  //     setTodos(data);
  //   }
  //   fetchData();

  //const timer = setTimeout(()=>{},3000);

  // for unmounting phase
  // return () => {
  //   clearInterval(timer);
  // }

  // },[]);

  // console.log('rednered comp')
  // if (todos.length === 0) {
  //   return <p>Loading....</p>; // use skelton instead of this ok
  // }

 
  const Ans = withPromotedRestaurantDetails(RestaurantDetails);

  return (
    <>
      <div className="flex justify-center items-center ">
        <div
          className="bg-black-400"
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
        <div
          id="searchByName"
          className="flex justify-between items-center m-5"
        >
          <input
            className="border border-black-500"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="border border-black-500"
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
        <div>{userData.username}</div>
      </div>

      {/* <div className="todos">
        {todos.map((todo,idx) => (
          <p key={idx}>{todo.title}</p>
        ))}
      </div> */}

      <div className="flex justify-between items-center flex-wrap">
        {resList.map((res, idx) => (
          <Link to={`/restaurant/${idx}`} key={idx}>
            {res.promoted ? <Ans res={res} /> : <RestaurantDetails res={res} />}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
