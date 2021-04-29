import Contact from './pages/Contact';
import About from './pages/AboutUs';
import Home from './pages/Home';
import HowToUse from './pages/HowToUse';
import Features from './pages/Features';
import Business from './pages/Business';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Login from './components/LogIn/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import logo from './images/logo.png';
import blueLogo from './images/blueLogo2.png';
import whiteLogo from './images/logo2.png';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
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

          <Route exact path="/howToUseIt">
            <Navbar blackColor="navbar-light" navLogo={blueLogo} />
            {/* <HowToUse /> */}
          </Route>
          <Route exact path="/login">
            <Navbar blackColor="navbar-light" navLogo={blueLogo} />
            <Login />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
