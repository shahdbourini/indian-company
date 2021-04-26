import Contact from './pages/Contact';
import About from './pages/AboutUs';
import Home from './pages/Home';
import HowToUse from './pages/HowToUse';
import Features from './pages/Features';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Login from './components/LogIn/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import logo from './images/logo.png';
import blueLogo from './images/blueLogo.png';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/indian-company">
            <Navbar blackColor="navbar-light" navLogo={logo} />
            <Home />
          </Route>

          <Route exact path="/about">
            <Navbar blackColor="navbar-light" navLogo={logo} />
            <About />
          </Route>

          <Route exact path="/features">
            <Navbar blackColor="blueColor" navLogo={logo} />
            <Features />
          </Route>
          <Route exact path="/contact">
            <Navbar blackColor="navbar-light" navLogo={logo} />
            <Contact />
          </Route>

          <Route exact path="/howToUseIt">
            <Navbar blackColor="navbar-dark blackColor" navLogo={logo} />
            <HowToUse />
          </Route>
          <Route exact path="/login">
            <Navbar blackColor="navbar-light" navLogo={logo} />
            <Login />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
