import './Css/Header.css'
import {
  Link
} from "react-router-dom";

const Header = () => {
  return (
    <header>
<nav class="main-nav">
  <input type="checkbox" id="check" />
  <label for="check" class="menu-btn">
    <i class="fas fa-bars"></i>
  </label>
  <a href="index.html" class="logo">Math Magician</a>
  <ul class="navlinks">
    <li><Link className="link" to="/">Home</Link></li>
    <li><Link className="link" to="/calculator">Calculator</Link></li>
    <li><Link className="link" to="/quote">Quote</Link></li>
  </ul>
</nav>
</header>
  );
};

Header.displayName = 'Header';

export default Header;