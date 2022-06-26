import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="nav-wrapper">
      <div className="brand-logo">TeeTime</div>

      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li className="nav-list">
          <Link to="/dashboard">Home</Link>
        </li>
      </ul>

      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li className="nav-list">
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav; 
