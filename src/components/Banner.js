import {BANNER_URL} from "/src/utils/constants"

const Banner = ()=> {
  return (
  <div className="bannerContainer">
    <div className="bannerText"><h1>Order Food Online in Bangalore</h1></div>
    <div className="bannerImage">
      <img src={BANNER_URL} />
    </div>
    
  </div>
)
}

export default Banner