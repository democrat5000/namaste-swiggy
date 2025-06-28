import { EXPLORE_URL } from "/src/utils/constants"
import {SUPPORT_URL} from "/src/utils/constants"
import {PARTNER_URL} from "/src/utils/constants"
import {RIDE_WITH_US_URL} from "/src/utils/constants"


const LifeAtSwiggy = ()=> {
  return(
    <div className="life-at-swiggy">
      <h2 style={{fontWeight:"bold", margin:0}}>Life at Swiggy</h2>
      <a target="_blank" href={ EXPLORE_URL }>Explore with Swiggy</a>
      <a target="_blank" href={SUPPORT_URL}>Help & Support</a>
      <a target="_blank" href={PARTNER_URL}>Partner With Us</a>
      <a target="_blank" href={RIDE_WITH_US_URL}>Ride With Us</a>
    </div>
    )
  }

export default LifeAtSwiggy