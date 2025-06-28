import {LOGO_SRC_URL} from "/src/utils/constants"


const Copyright = ()=> {
  return(
    <div className="copyright">
      <img className="logo-footer" src={LOGO_SRC_URL}/>
      <p>&#169; 2024 Bundl Technologies Pvt. Ltd</p>
    </div>
  )
}

export default Copyright