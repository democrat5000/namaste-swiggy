import RestaurantCard from "/src/components/RestaurantCard"

const ResContainer = ()=> {
  return(
    <div className="res-container">
    <RestaurantCard resName="Indian Eatery" cuisines = "Cuisines: Indian, nnnn, nnnn, nnnn, nnnn" rating = "Rating: 4.5 / 5" deliveryTime = "Delivery Time: 35 mins" src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
    <RestaurantCard resName="Taco Bell" cuisines = "Cuisines: Mexican" rating = "Rating: 4.0 / 5" deliveryTime = "Delivery Time: 30 mins" src="https://images.pexels.com/photos/3642718/pexels-photo-3642718.jpeg"/>
    <RestaurantCard resName="Emperor's Palace" cuisines = "Cuisines: Chinese" rating = "Rating: 5.0 / 5" deliveryTime = "Delivery Time: 25 mins" src="https://media.istockphoto.com/id/1475223065/fi/valokuva/dandan-nuudelit-ja-dim-sum.webp?s=1024x1024&w=is&k=20&c=dmZuWx5i5_uNm7kEQUk_WyJ6FNAq0M0trLmqFLVOOTE="/>
    <RestaurantCard resName="Indian Eatery" cuisines = "Cuisines: Indian, nnnn, nnnn, nnnn, nnnn" rating = "Rating: 4.5 / 5" deliveryTime = "Delivery Time: 35 mins" src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
    <RestaurantCard resName="Taco Bell" cuisines = "Cuisines: Mexican" rating = "Rating: 4.0 / 5" deliveryTime = "Delivery Time: 30 mins" src="https://images.pexels.com/photos/3642718/pexels-photo-3642718.jpeg"/>
    <RestaurantCard resName="Emperor's Palace" cuisines = "Cuisines: Chinese" rating = "Rating: 5.0 / 5" deliveryTime = "Delivery Time: 25 mins" src="https://media.istockphoto.com/id/1475223065/fi/valokuva/dandan-nuudelit-ja-dim-sum.webp?s=1024x1024&w=is&k=20&c=dmZuWx5i5_uNm7kEQUk_WyJ6FNAq0M0trLmqFLVOOTE="/>
    
    </div>
  )
}

export default ResContainer