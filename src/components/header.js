import React from 'react';
import Logo from '../images/robinhood.svg';
import './Header.css';
function Header() {
  return (
    <div className='header_wrapper'>
        {/*  logo */}
        <div className="header_logo">
          <img src={Logo} width={25} alt="logo"/>
        </div>
        {/* search */}
        <div className="header_search">
          <div className="header_searchContainer">
            <input placeholer="Search" type="text" />
            
          </div>
        </div>
        {/* menuitems */}
        <div className="header_menuItems">
          <a href="javascript:void(0)">Free Stocks</a>
          <a href="javascript:void(0)">Portfolio</a>
          <a href="javascript:void(0)">Cash</a>
          <a href="javascript:void(0)">Messages</a>
          <a href="javascript:void(0)">Account</a>
        </div>
    </div>
  )
}

export default Header