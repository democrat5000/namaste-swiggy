// =============FOOTER-LEGAL==================

import {TERMS_CONDITIONS_URL} from "/src/utils/constants"
import {COOKIE_POLICY_URL} from "/src/utils/constants"
import {PRIVACY_POLICY_URL} from  "/src/utils/constants"
import {INVESTOR_RELATIONS_URL} from "/src/utils/constants"
import {NEWSROOM_URL} from "/src/utils/constants"
import {SUSTAINABILITY_URL} from "/src/utils/constants"

const Legal = ()=> {
  return(
    <div className="legal">
      <h2 style={{fontWeight:"bold"}}>Legal</h2>
      <a target="_blank" href={TERMS_CONDITIONS_URL}>Terms & Conditions</a>
      <a target="_blank" href={COOKIE_POLICY_URL}>Cookie Policy</a>
      <a target="_blank" href={PRIVACY_POLICY_URL}>Privacy Policy</a>
      <a target="_blank" href={INVESTOR_RELATIONS_URL}>Investor Relations</a>
      <a target="_blank" href={NEWSROOM_URL}>Newsroom</a>
      <a target="_blank" href={SUSTAINABILITY_URL}>Sustainability</a>
    </div>
  )
}

export default Legal