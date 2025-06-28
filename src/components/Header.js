

const Header = ()=> {
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" alt="swiggy-logo" />
      </div>
      <div className="nav-items-container">
        <ul className="nav-items">
          <li className="home" >Home</li>
          <li className="about">About Us</li>
          <li className="contact">Contact Us</li>
          <img className="cart" src="https://img.icons8.com/?size=160&id=LhRbsuC35iCh&format=png" alt="" />
        </ul>
      </div>
    </div>
  )
}

export default Header