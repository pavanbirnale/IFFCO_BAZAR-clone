import React from 'react'
import { NavLink } from 'react-router-dom';
const Secondnav = () => {
  return (
    <>
      <div className='secondNav'>
        <div className="container">
          <div className="row">
            <ul className='main-menu'>
              <li className='navbar-item'>
                <NavLink to='/combo-pack'>ComboPack</NavLink>
              </li>
              <li className='navbar-item'>
                <NavLink to='/gardening'>Gardening</NavLink>
                
              </li>
              <li className='navbar-item'>
                <NavLink to='seeds'>Seeds</NavLink>
              </li>
              <li className='navbar-item'>
                <NavLink to='fertilizer'>Fertilizer</NavLink>
              </li>
              <li className='navbar-item'>
                <NavLink to='pesticide'>Pesticide</NavLink>
              </li>
              <li className='navbar-item'>
                <NavLink to='organic-product'>organic Product</NavLink>
              </li>
              <li className='navbar-item'>
                <NavLink to='agriculture-implements'>Agri Implements</NavLink>
              </li>
              <li className='navbar-item'>
                <NavLink to='crop-care'>Crop Care</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Secondnav;
