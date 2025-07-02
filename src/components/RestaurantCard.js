

const RestaurantCard = (props)=> {
  const {src, name, cuisines, avgRating, costForTwo,deliveryTime} = props
  console.log(props)
  return(
  <div className="res-card">
      <img className="image" src={src} />
      <div className="name">{name}</div>
      <div className="cuisines">Cuisines: {cuisines.join(", ")}</div>
      <div className="rating">Avg Rating: {avgRating} stars</div>
      <div className="costForTwo">Cost: {costForTwo}</div>
      <div className="delivery-time">Delivery Time: {deliveryTime} minutes</div>
  </div>)
}

export default RestaurantCard