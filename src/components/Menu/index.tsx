import HamburguerIcon from "../../assets/icons/menu-hamburguer.png"
import "./styles.css";

function Menu () {
    return (
        <div className="menu">
        <ul>
          <li>
            <a href="#">
              <img src={HamburguerIcon}></img>
            </a>
          </li>
          <li>
            <a href="#">
              <p>All Categories</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Outdors</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Indors</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Water</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Kids</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Women</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Men</p>
            </a>
          </li>
        </ul>
      </div>
);
}

export default Menu;