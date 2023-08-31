import React from 'react'
import { NavLink } from 'react-router-dom'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
        <div className="logo">
          <NavLink to='/'>
            <img src="images/logo.png" alt="Logo" />
          </NavLink>
        </div>
        <div className="delivery-pin">
          <FmdGoodOutlinedIcon className='location-icon' />
          <span>Delivering To:</span> <span className="pin-code">413527</span> <img src="images/edit.svg" alt="Edit" />
        </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for a product and brands..." className='form-control search-box' />
        <button type="submit" className='btn btn-success'>
          <SearchOutlinedIcon />
        </button>
      </div>
      <div className="logIn">
        <button className='btn btn-success'>LogIn</button>
      </div>
      <div className="cart">
        <NavLink to='/cart'>
        <button className='btn btn-outline-success'>
          <ShoppingCartOutlinedIcon />
        </button>
        </NavLink>
      </div>
    </nav>

  )
}

export default Navbar;
