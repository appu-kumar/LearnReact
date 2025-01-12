


const RestaurantDetails = (props) => {
  const {res} = props;
  const { image, name, rating, rate, description, deliveryTime } = res;
 
  return (
    <div className="border border-black-500 p-5 m-5 bg-color-red">
      <div><img src={image}></img> </div>
      <h2> {name}</h2>
      <h3>{rating}</h3>
      <h1>{rate}</h1>
      <p>{description}</p>
      <p>{deliveryTime}</p>
    </div>
  );
};

export default RestaurantDetails;
