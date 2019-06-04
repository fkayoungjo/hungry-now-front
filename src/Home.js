import React from 'react';
import background1 from './background1.jpg';
import { Button, NavLink } from 'reactstrap';
import ContactUs from './ContactUs.js';
import About from './About.js';



export const Home = (props) => {

  return (
    <div>
        <div className="hjumbo" style={{backgroundImage: `url(${background1})`, backgroundSize: 'cover'}} >
          <div className="home">
            <h1 >WELCOME TO HUNGRYNOW</h1>
            <p >Quick and Easy Meals for those on the go!</p>
            <NavLink href="/search" className="navitem"><Button>Let's Eat! </Button></NavLink>
            </div>
        </div>
        <footer>
          <div id="about"><About /></div>
          <div id="contact_us"><ContactUs /></div>
        </footer>
    </div>
  );
}



export default Home;
