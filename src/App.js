import React from 'react'
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import 'mdb-ui-kit/css/mdb.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import Home from './FileComponents/Home/Home';
import SingleCartItem from './FileComponents/Cart/SingleCartItem';
import CartItems from './FileComponents/Cart/CartItems'
import ComboPack from './FileComponents/Navbar_Components/ComboPack';
import Gardening from './FileComponents/Navbar_Components/Gardening'
import Seeds from './FileComponents/Navbar_Components/Seeds';
import Secondnav from './Components/Header/Secondnav';
import Fertilizer from './FileComponents/Navbar_Components/Fertilizer';
import Pesticide from './FileComponents/Navbar_Components/Pesticide';
import OrganicProduct from './FileComponents/Navbar_Components/OrganicProduct';
import AgriImplements from './FileComponents/Navbar_Components/AgriImplements'
import CropCare from './FileComponents/Navbar_Components/CropCare'
import Error from './FileComponents/Navbar_Components/Error';
import About from './FileComponents/Menu/About'
import Contact from './FileComponents/Menu/Contact'
import DigitalPayments from './FileComponents/Menu/DigitalPayments'
import Quiz from './FileComponents/Menu/Quiz'
import Privacy from './FileComponents/Menu/Privacy'
import Footer from './Components/Footer/Footer';
const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Secondnav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<CartItems/>}></Route>
        <Route path='/combo-pack' element={<ComboPack />}></Route>
        <Route path='/gardening' element={<Gardening />}></Route>
        <Route path='seeds' element={<Seeds />}></Route>
        <Route path='fertilizer' element={<Fertilizer />}></Route>
        <Route path='pesticide' element={<Pesticide />}></Route>
        <Route path='organic-product' element={<OrganicProduct />}></Route>
        <Route path='agriculture-implements' element={<AgriImplements />}></Route>
        <Route path='crop-care' element={<CropCare />}></Route>
        <Route path='about-us' element={<About />}></Route>
        <Route path='contact-us' element={<Contact />}></Route>
        <Route path='digital-payments' element={<DigitalPayments />}></Route>
        <Route path='quiz' element={<Quiz />}></Route>
        <Route path='privacy' element={<Privacy />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
