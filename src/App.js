import Contact from './pages/Contact';
import About from './pages/AboutUs';
import Home from './pages/Home';
import Features from './pages/Features';
import Business from './pages/Business';
import Sec2 from './components/features-sections/Sec2';
import Sec3 from './components/features-sections/Sec3';
import Sec4 from './components/features-sections/Sec4';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Login from './components/LogIn/Login';
import Signup from './components/signup/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from 'react-router-dom';
import './App.css';
import blueLogo from './images/blueLogo3.png';
import whiteLogo from './images/logo3.png';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function App() {
  const { t } = useTranslation();

  function onChange(checked) {
    if (checked) {
      i18next.changeLanguage('en');
    } else {
      i18next.changeLanguage('it');
    }
  }

  return (
    <>
      <HashRouter>
        <Route exact path="/">
          <Navbar blackColor="navbar-light" navLogo={blueLogo} t={t} />
          <Home t={t} />
        </Route>

        <Route exact path="/business">
          <Navbar
            blackColor="navbar-dark blackColor"
            navLogo={whiteLogo}
            t={t}
          />
          <Business t={t} />
        </Route>

        <Route exact path="/about">
          <Navbar blackColor="navbar-light" navLogo={blueLogo} t={t} />
          <About t={t} />
        </Route>

        <Route exact path="/features">
          <Navbar
            blackColor="navbar-dark blueColor"
            navLogo={whiteLogo}
            t={t}
          />
          <Features t={t} />
        </Route>
        <Route exact path="/contact">
          <Navbar blackColor="navbar-light" navLogo={blueLogo} t={t} />
          <Contact t={t} />
        </Route>

        {/* <Route exact path="/login">
            <Navbar blackColor="navbar-light" navLogo={blueLogo} t={t} />
            <Login />
          </Route> */}

        <Route exact path="/sign-up">
          <Navbar blackColor="navbar-light" navLogo={blueLogo} t={t} />
          <Signup t={t} />
        </Route>

        <Route exact path="/instant-top-up">
          <Navbar
            blackColor="navbar-dark blueColor"
            navLogo={whiteLogo}
            t={t}
          />
          <Sec2 />
        </Route>

        <Route exact path="/manage-your-money">
          <Navbar
            blackColor="navbar-dark blueColor"
            navLogo={whiteLogo}
            t={t}
          />
          <Sec4 />
        </Route>

        <Route exact path="/instant-receive-and-send-payment">
          <Navbar
            blackColor="navbar-dark blueColor"
            navLogo={whiteLogo}
            t={t}
          />
          <Sec3 />
        </Route>

        <Footer t={t} onChange={onChange} />
      </HashRouter>
    </>
  );
}

export default App;
