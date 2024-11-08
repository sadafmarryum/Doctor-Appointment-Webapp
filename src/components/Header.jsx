import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/homepg/headerLogo.png';


const Header = () => {
 return (
  <>
   <div className='header-container'>
    <div className='header-logo'><img src={logo} alt="health-icon" />
    <h2>Health-Hub</h2>
    </div>
    <div className='header-list'>
     <ul>
      <li><Link to="/" className='link'>Home</Link></li>
      <li> <Link to="/doctors" className='link'>All Doctors</Link></li>
      <li><Link to="/about" className='link'>About</Link></li>
      <li><Link to="/contact" className='link'>Contact Us</Link></li>
     </ul>
    </div>
    <button>Create account</button>
   </div>

  </>
 )
}

export default Header
