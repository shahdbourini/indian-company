import './style-nav.css';
import { NavLink, useHistory } from 'react-router-dom';
import { Button } from 'antd';
import 'antd/dist/antd.css';
// import logo from '../../images/logo.png';

function Navbar(props) {
  let history = useHistory();
  return (
    <>
      <div>
        <nav
          className={`navbar navbar-expand-lg  ${props.blackColor}`}
          style={{ background: `${props.backColor}` }}
        >
          <img src={props.navLogo} alt="logo" className="navbar-brand" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  activeClassName="is-active"
                  className="nav-link"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/features"
                  activeClassName="is-active"
                  className="nav-link"
                >
                  Features
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/About"
                  activeClassName="is-active"
                  className="nav-link"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/blog"
                  activeClassName="is-active"
                  className="nav-link"
                >
                  Blog
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/business"
                  activeClassName="is-active"
                  className="nav-link"
                >
                  Business
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  activeClassName="is-active"
                  className="nav-link"
                >
                  Contact us
                </NavLink>
              </li>
              <li className="nav-item">
                <Button
                  onClick={() => history.push('/sign-up')}
                  className="button1"
                  type="primary"
                >
                  Sign up
                </Button>
              </li>
              <li className="nav-item">
                <Button
                  // onClick={() => history.push('/login')}
                  className="button2"
                >
                  Log in
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
