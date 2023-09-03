import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './MainPage'
import Products from './Products'
import SingleProduct from './SingleProduct'
import Contact from './Contact'
import Register from './Register'
import Login from './Login'
import Navbar from '../components/Navbar'
import SideBarPage from './SideBarPage'
// import Slider from '../components/Slider'


const Home = () => {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='products' element={<Products />} />
            <Route path='products/:id' element={<SingleProduct />} />
            <Route path='filter-products' element={<SideBarPage />} />
            <Route path='contact' element={<Contact />} />
            <Route path='register' element={<Register />} />
            <Route path='Login' element={<Login />} />
        </Routes>    
                  {/* <Slider /> */}
                  {/* <Products /> */}
      </Router>
    
        
    </>
  )
}

export default Home
