


const RestaurantDetails = (props) => {
  const {res} = props;
  const { image, name, rating, rate, description, deliveryTime } = res;
 
  return (
    <div className="res">
      <img src={image}></img>
      <h2> {name}</h2>
      <h3>{rating}</h3>
      <h1>{rate}</h1>
      <p>{description}</p>
      <p>{deliveryTime}</p>
    </div>
  );
};

export default RestaurantDetails;
