

const RestaurantCard = (props)=> {
  const {src, resName, cuisines, rating, deliveryTime} = props
  console.log(props)
  return(
  <div className="res-card">
      <img className="image" src={src} alt="resImage" />
      <div className="name">{resName}</div>
      <div className="cuisines">{cuisines}</div>
      <div className="rating">{rating}</div>
      <div className="delivery-time">{deliveryTime}</div>
  </div>)
}

export default RestaurantCard