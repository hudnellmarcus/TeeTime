import { Link } from "react-router-dom";
import {login, logout } from '../services/firebase'

function Nav(props) {
  return (
    <nav>
    <div className="nav-wrapper">
      <h3 className="brand-logo">TeeTime</h3>
<ul>
  <li><Link to='/dashboard'>Home</Link></li>
  <li onClick={login}></li>
</ul>
    </div>
    </nav>
  );
}

export default Nav; 
