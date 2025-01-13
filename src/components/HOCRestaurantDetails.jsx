// HOC---> It is a js function that takes the component and returns modified(feature addded) componenet
export const withPromotedRestaurantDetails = (RestaurantDetails) => {
  return (props) => {
    console.log('props',props.promoted)
    return (
      <div>
        {props.res.promoted && <label className="absolute z-10 bg-black-1000 border border-red-500">Promoted</label>}
        <RestaurantDetails {...props} />
      </div>
    );
  };
};
