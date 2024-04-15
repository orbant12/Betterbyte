import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/NavBar.css';

const NavBar = () => {

const [nav, setNav] = React.useState(null);

useEffect(() => {
  setNav(document.querySelector("nav"))
}, []);

const handleBurgerMenuOpen2 = () => {
  nav.classList.add("active");
  
}

const handleBurgerMenuClose2 = () => {
  nav.classList.remove("active");
  
}


return (
  <>
    <div className='add-bar'>
          <span>Get 20% off on all services</span>
    </div>
    <nav>
      <div className="nav-bar active">
        <i className='bx bx-menu sidebarOpen' onClick={handleBurgerMenuOpen2}/>
        <span className="logo navLogo"><a href="/">betterByte</a></span>
        <div className="menu show">
          <div className="logo-toggle ">
            <span className="logo"><a href="#">betterByte</a></span>
            <i className='bx bx-x siderbarClose' onClick={handleBurgerMenuClose2}></i>
          </div>
          <ul className="nav-links">
            <li><a href="/mobile-projects">Home</a></li>
            <li><a href="/fullstack-projects">Services</a></li>
            <li><a href="/cyber_security-projects">Clients</a></li>
          </ul>
        </div>
      
        <div className="nav-more">
            <a href="/about-me">About</a>
            <a>|</a>
            <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  </>
)};

export default NavBar;
