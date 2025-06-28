import Copyright from "/src/components/Copyright"
import Company from "/src/components/Company"
import Legal from "/src/components/Legal"
import LifeAtSwiggy from "/src/components/LifeAtSwiggy"
import SocialLinks from "/src/components/SocialLinks"

const Footer = ()=> {
  return(
    <div className="footer">
      <Copyright/>
      <Company/>
      <Legal/>
      <LifeAtSwiggy/>
      <SocialLinks/>
    </div>
  )
}

export default Footer