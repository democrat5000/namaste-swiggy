import {LINKEDIN_URL} from "/src/utils/constants"
import {LINKEDIN_SRC_URL} from "/src/utils/constants"
import {FACEBOOK_URL} from "/src/utils/constants"
import {FACEBOOK_SRC_URL} from "/src/utils/constants"
import {TWITTER_URL} from "/src/utils/constants"
import {TWITTER_SRC_URL} from "/src/utils/constants"

const SocialLinks = ()=> {
  return(
    <div className="social">
      <h2 style={{fontWeight:"bold"}}>Social Links</h2>
      <div className="social-links">
      <a target="_blank" href={LINKEDIN_URL} target="_blank"><img src={LINKEDIN_SRC_URL}
        className="linkedin"></img></a>

        <a target="_blank" href={FACEBOOK_URL}><img src={FACEBOOK_SRC_URL} 
        className="facebook"
        ></img></a>

        <a href={TWITTER_URL} target="_blank"><img src={TWITTER_SRC_URL} 
        className="twitter"
        ></img>

        </a>
        </div>
    </div>
  )
}

export default SocialLinks