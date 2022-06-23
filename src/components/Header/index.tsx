import Logo from "../../assets/logos/logo-horizontal.png";
import IconOne from "../../assets/icons/icon1.png";
import IconTwo from "../../assets/icons/icon2.png";
import IconThree from "../../assets/icons/icon3.png";
import IconFour from "../../assets/icons/icon4.png";
import InputSearch from "../../assets/icons/input-search.png"
import "./styles.css";

function Header() {
  return (
    <header>
      <nav>
          <div id="logo">
            <a href="#">
              <img src={Logo} alt="logo da empresa" />
            </a>
          </div>
          <div className="search-input">
            <i>
              <img src={InputSearch}></img>
            </i>
            <input
              type="search"
              placeholder="search here for your product"
            ></input>
          </div>
          <div className="nav-icons">
            <ul>
              <li>
                <a href="#">
                  <img src={IconOne}></img>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={IconTwo}></img>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={IconThree}></img>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={IconFour}></img>
                </a>
              </li>
            </ul>
          </div>
      </nav>

    </header>
  );
}

export default Header;
