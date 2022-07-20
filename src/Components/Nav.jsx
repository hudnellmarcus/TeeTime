import { Link } from "react-router-dom";
import { login, logout } from "../services/firebase";

function Nav(props) {
  return (
    <nav>
      <div>
            <h3 className="brand-logo left">TeeTime</h3>
        <ul>
          <li>
          </li>
        </ul>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/dashboard">Home</Link>
            </li>
            {
              props.user 
         ? 
         ( 
          <>
           <li onClick={logout}>Logout</li>
           </>
         )
          : <li onClick={login}>Login</li>
            }
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
