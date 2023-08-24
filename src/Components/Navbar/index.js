import { HEADER_LINKS } from "../../Views/Home/helper"
import { assets } from "../../assets/assets"
import { useNavigate } from "react-router-dom"
import "./style.css"


 const NavbarComp = () => {

  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/")
    // console.log("work")
  }

   return <nav>
          <div className="custom-container nav-wrapper">
            <div className="brand">
              <img src={assets.brandLogo} alt="" onClick={redirectToHome} style={{cursor:"pointer"}}/>
            </div>
            <div className="hamburger">
              <i className="fa-solid fa-bars"></i>
            </div>
            <ul className="nav-list">
              {HEADER_LINKS.map((ele , i ) => (
                <li key={ele.name}>
                  <a className={ i===2 ? 'tooltiptext': null}  href={ele.url}>{ele.name}{(i>0 && i<3) && <span id="tooltip">Coming Soon</span>}</a>
                </li>
              ))}
              <li>
                <button className="custom-btn-special" onClick={redirectToHome}>Try For Free</button>
              </li>
            </ul>
          </div>
        </nav>
}

export default NavbarComp