import { restaurants } from "../utils/constants";
import RestaurantDetails from "./Restaurants";
import { useState } from "react";
import { ratings } from "../utils/constants";
const Body = () => {
  // these are the state variables that syncs ui and data
  const [resList, setResList] = useState(restaurants);
  const [rating, setRating] = useState(0);

  console.log(rating)

  return (
    <>
      <div
        id="search"
        onClick={() => {
          setResList(restaurants.filter((res) => res.rating >rating));
        }}
      >
      Top rated Restaurants
       
      </div>
      <div id="rating">
          <select onChange={(e) => setRating(e.target.value)}>
            {ratings.map((rating,idx) => (
              <option key={idx}>{rating}</option>
            ))}
          </select>
        </div>

      <div className="restaurants">
        {resList ? (
          resList.map((res, idx) => <RestaurantDetails key={idx} res={res} />)
        ) : (
          <p>restuarants not found</p>
        )}
      </div>
    </>
  );
};

export default Body;
