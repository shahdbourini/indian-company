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
  Redirect,
} from 'react-router-dom';
import './App.css';
import blueLogo from './images/blueLogo2.png';
import whiteLogo from './images/logo2.png';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/indian-company">
            <Navbar blackColor="navbar-light" navLogo={blueLogo} />
            <Home />
          </Route>

          <Route exact path="/business">
            <Navbar blackColor="navbar-dark blackColor" navLogo={whiteLogo} />
            <Business />
          </Route>

          <Route exact path="/about">
            <Navbar blackColor="navbar-light" navLogo={blueLogo} />
            <About />
          </Route>

          <Route exact path="/features">
            <Navbar blackColor="navbar-dark blueColor" navLogo={whiteLogo} />
            <Features />
          </Route>
          <Route exact path="/contact">
            <Navbar blackColor="navbar-light" navLogo={blueLogo} />
            <Contact />
          </Route>

          <Route exact path="/login">
            <Navbar blackColor="navbar-light" navLogo={blueLogo} />
            <Login />
          </Route>

          <Route exact path="/sign-up">
            <Navbar blackColor="navbar-light" navLogo={blueLogo} />
            <Signup />
          </Route>

          <Route exact path="/instant-top-up">
            <Navbar blackColor="navbar-dark blueColor" navLogo={whiteLogo} />
            <Sec2 />
          </Route>

          <Route exact path="/manage-your-money">
            <Navbar blackColor="navbar-dark blueColor" navLogo={whiteLogo} />
            <Sec4 />
          </Route>

          <Route exact path="/instant-receive-and-send-payment">
            <Navbar blackColor="navbar-dark blueColor" navLogo={whiteLogo} />
            <Sec3 />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
