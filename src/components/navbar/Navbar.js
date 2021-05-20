import './style-nav.css';
import { NavLink, useHistory } from 'react-router-dom';
import { Button } from 'antd';
import 'antd/dist/antd.css';
// import logo from '../../images/logo.png';

function Navbar(props) {
  const handleClick = (e) => {
    e.preventDefault();
  };
  let history = useHistory();
  return (
    <>
      <div>
        <nav
          className={`navbar navbar-expand-lg  ${props.blackColor}`}
          style={{
            background: `${props.backColor}`,
          }}
        >
          <div className={`navbar navbar-expand-lg logo-width`}>
            <img
              src={props.navLogo}
              alt="logo"
              className="navbar-brand"
              onClick={() => history.push('/indian-company')}
            />
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
                    to="/indian-company"
                    activeClassName="is-active"
                    className="nav-link"
                  >
                    {props.t('nav.1')}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/features"
                    activeClassName="is-active"
                    className="nav-link"
                  >
                    {props.t('nav.2')}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/About"
                    activeClassName="is-active"
                    className="nav-link"
                  >
                    {props.t('nav.3')}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={handleClick}
                    to="/blog"
                    activeClassName="is-active"
                    className="nav-link"
                  >
                    {props.t('nav.4')}
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/business"
                    activeClassName="is-active"
                    className="nav-link"
                  >
                    {props.t('nav.5')}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    activeClassName="is-active"
                    className="nav-link"
                  >
                    {props.t('nav.6')}
                  </NavLink>
                </li>
              </ul>

              <Button
                onClick={() => history.push('/sign-up')}
                className="button1"
                type="primary"
              >
                {props.t('nav.7')}
              </Button>
              <Button
                // onClick={() => history.push('/login')}
                className="button2"
              >
                {props.t('nav.8')}
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
