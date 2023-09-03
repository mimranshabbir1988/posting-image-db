import React from 'react'
import { Link } from 'react-router-dom'
// import Slider from './Slider'
// import Products from '../pages/Products'
// #232F3E
// FEBD69
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      <img className='logoStyle' src='./images/headers/amazonLogo.webp' width={100} height={60} />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="customer">Customer Service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="gift">Gift Cards</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="deal">Today's Deal</Link>
        </li>       
      </ul>
      <form className="d-flex">
        {/* <div className='searchBarIcon'>
          <input className="form-control topSearchBar me-2" type="search" placeholder="Search" aria-label="Search" />
          <i className="fas fa-search"></i>
        </div> */}        
        <button className="btn btn-light me-2 btn-sm" type="submit">
          Login
        </button>
        <Link to="/register" className="btn btn-light btn-sm" type="submit">
          Register
        </Link>
      </form>
    </div>
  </div>
</nav>

{/* <Slider /> */}
{/* <Products /> */}

    </>
  )
}

export default Navbar
