import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import Img_logo from '../images/logo-AFR.png';
import { Button } from './Button.js';
import { useLocation } from "react-router";

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
    if (currentScrollPos === (0, 0)){
      document.getElementById("navbar").style.top = "0";

    
    }
  }

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

function Navigation() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else {
      setButton(true);
    }
  }

//Service drop down
function DropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.drop-port')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

  window.addEventListener('resize', showButton);
  return (

  <nav className='navbar' id="navbar">
      <div class="navbar-left">
         <a href="/" aria-current="page" class="w-inline-block w--current">
         </a>
      </div>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fa fa-times':'fa fa-bars'}></i>
      </div>
      <div class="navbar-right">

        <ScrollToTop>
        <ul className={click ? 'nav-menu active':'nav-menu'}>
        <li>
          <NavLink to="/" className='nav-links' onClick={closeMobileMenu}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/aboutpage" className='nav-links' onClick={closeMobileMenu}>About</NavLink>
        </li>


        <li>
        <div class="dropdown" id="dropdown">
        <NavLink to="/ServicePage" className='nav-links a dropbtn' id="drop-port" onMouseOver={()=>{ DropDown(); closeMobileMenu(); }} >Services</NavLink>
          <div class="dropdown-content" id="myDropdown" aria-labelledby="navbarDropdown" onhov>
            <NavLink  to="/ServicePage" href="#anchor1" className='nav-links drop' onClick={closeMobileMenu}>Basement Waterproofing</NavLink>
            <NavLink to="/services/Service2" className='nav-links drop' onClick={closeMobileMenu}>Foundation Lowering</NavLink>
            <NavLink to="/services/Service3" className='nav-links drop' onClick={closeMobileMenu}>Crack Injection Repair</NavLink>
            <NavLink to="/services/Service4" className='nav-links drop' onClick={closeMobileMenu}>Window Well</NavLink>
            <NavLink to="/services/Service5" className='nav-links drop' onClick={closeMobileMenu}>Sump Pumps</NavLink>
            <NavLink to="/services/Service6" className='nav-links drop' onClick={closeMobileMenu}>Weeping Tiles</NavLink>
            <NavLink to="/services/Service7" className='nav-links drop' onClick={closeMobileMenu}>Basement Window</NavLink>
            <NavLink to="/services/Service8" className='nav-links drop' onClick={closeMobileMenu}>Structural Repairs</NavLink>
            <NavLink to="/services/Service9" className='nav-links drop' onClick={closeMobileMenu}>Basement Lowering</NavLink>
            <NavLink to="/services/Service10" className='nav-links drop' onClick={closeMobileMenu}>Bowing Walls</NavLink>
            <NavLink to="/services/Service11" className='nav-links drop' onClick={closeMobileMenu}>Concrete Repair</NavLink>
            <NavLink to="/services/Service12" className='nav-links drop' onClick={closeMobileMenu}>Wall Replacement</NavLink>
            <NavLink to="/services/Service13" className='nav-links drop' onClick={closeMobileMenu}>Sewer Backups</NavLink>
            <NavLink to="/services/Service14" className='nav-links drop' onClick={closeMobileMenu}>Cracked Waterproofing</NavLink>

            <ul>
      
    </ul>
          </div>
        </div>
        </li>
       
   

        <li>
          <NavLink to="/contactpage" className='nav-links' onClick={closeMobileMenu}>Contact</NavLink>
        </li>

        </ul>
      </ScrollToTop>
      </div>

</nav>

  );
}

export default Navigation;
