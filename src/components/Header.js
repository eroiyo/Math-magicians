import './Css/Header.css';
import {
  Link,
} from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="main-nav">
      <input type="checkbox" id="check" />
        <i className="fas fa-bars" />
      </label>
      <a href="index.html" className="logo">Math Magician</a>
      <ul className="navlinks">
        <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="/calculator">Calculator</Link></li>
        <li><Link className="link" to="/quote">Quote</Link></li>
      </ul>
    </nav>
  </header>
);

Header.displayName = 'Header';

export default Header;
