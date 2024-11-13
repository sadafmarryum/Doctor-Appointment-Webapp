import React, { useState } from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/homepg/headerLogo.png';
import HPP from '../assets/homepg/header-profile-pic.png';
import DD from '../assets/homepg/dropdown-icon.svg';

const Header = () => {

 let [token, settoken] = useState(true);

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

    <div>
     {
      token
       ? <div className='dropdown'>
        <img src={HPP} alt="profile-pic" id='profile-pic' />
        <img src={DD} alt="dropdown-arrow" id='dropdown-arrow' />
        <div class="dropdown-content">
         <li><Link to="/myProfile" className='link'>My Profile</Link></li>
         <li><Link to="/userappointment" className='link'>My Appointment</Link></li>
         <li onClick={() => settoken(false)}>Logout</li>
        </div>
       </div>
       :
       <button><Link to="/login" className='link'>Create account</Link>
       </button>
     }
    </div>
   </div>

  </>
 )
}

export default Header
