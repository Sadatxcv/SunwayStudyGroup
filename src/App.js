import React from 'react';
import './App.css';
import Navbar from './Components/Header/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import { BrowserRouter as Router, Route, Switch, Routes, Link } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Ssgagent from './Components/Pages/SSGAgentForm/Ssgagent'
import Scholarship from './Components/Pages/Scholarship/Scholarship';
import University from './Components/Pages/University/University';
import Blog from './Components/Pages/Blog/Blog';
import ApplyScholarship from './Components/Pages/ApplyScholarship/ApplyScholarship';
import Login from './Components/Pages/Login/Login'
import Application from './Components/Pages/ApplicationForm/Application';
import AboutUs from './Components/Pages/About Us/AboutUs';
import Signup from './Components/Pages/Login/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path= '/Agent' component={Ssgagent}/>
          <Route path= '/Scholarship' component={Scholarship}/>
          <Route path= '/University' component={University}/>
          <Route path= '/Blog' component={Blog}/>
          <Route path= '/Scholarship' component={ApplyScholarship}/>
          <Route path= '/Application' component={Application}/>
          <Route path='/Login' component={Login}/>
          <Route path='/SignUp' component={Signup}/>
          <Route path= '/AboutUs' component={AboutUs}/>
          
          

        </Switch>
        <Footer/>
      </Router>
    </>
  );
}
// comment for 2nd commit

export default App;
