import React from 'react'
import { Link } from 'react-router-dom'

const MainPageProduct = () => {
  return (
    <>

    <Link to="/filter-products">
        <div className="container my-5 pb-5 mb-sm-1">
  {/* Categories grid*/}
  <div className="row">
    {/* Category*/}
    <div className="col-md-4 col-sm-6">
      <div className="card border-0 mb-grid-gutter">
        <a className="card-img-tiles" href="shop-style1-ls.html">
          <div className="main-img"><img src="./images/mainpage/game.jpg" height={260} alt="Clothing" /></div>
          <div className="thumblist"><img src="./images/mainpage/ladies1.webp" height={130} alt="Clothing" /><img src="./images/mainpage/cro1.webp" height={130} alt="Shoes" /></div>
          
          
        </a>
        <div className="card-body border mt-n1 py-4 text-center">
          <h2 className="h5 mb-1">Clothing</h2><span className="d-block mb-3 font-size-xs text-muted">Starting from <span className="font-weight-semibold">$49.99</span></span><a className="btn btn-pill btn-outline-primary btn-sm" href="shop-style1-ls.html">Shop clothing</a>
        </div>
      </div>
    </div>
    {/* Category*/}
    <div className="col-md-4 col-sm-6">
      <div className="card border-0 mb-grid-gutter">
        <a className="card-img-tiles" href="shop-style1-ls.html">
          <div className="main-img"><img src="./images/mainpage/laptop.jpeg" height={260} alt="Shoes" /></div>
          <div className="thumblist"><img src="./images/mainpage/men1.webp" height={130} alt="Shoes" /><img src="./images/mainpage/kid1.jpg" height={130} alt="Shoes" /></div>
        </a>
        <div className="card-body border mt-n1 py-4 text-center">
          <h2 className="h5 mb-1">Shoes</h2><span className="d-block mb-3 font-size-xs text-muted">Starting from <span className="font-weight-semibold">$56.00</span></span><a className="btn btn-pill btn-outline-primary btn-sm" href="shop-style1-ls.html">Shop shoes</a>
        </div>
      </div>
    </div>
    {/* Category*/}
    <div className="col-md-4 col-sm-6">
      <div className="card border-0 mb-grid-gutter">
        <Link className="card-img-tiles" to="/filter-products">
          <div className="main-img"><img src="./images/mainpage/game.jpg" height={260} alt="Clothing" /></div>
          <div className="thumblist"><img src="./images/mainpage/ladies1.webp" height={130} alt="Clothing" />
          <img src="./images/mainpage/cro1.webp" height={130} alt="Shoes" />
          </div>
          
          
        </Link>
        <div className="card-body border mt-n1 py-4 text-center">
          <Link to="/filter-products">
          <h2 className="h5 mb-1">Clothing</h2><span className="d-block mb-3 font-size-xs text-muted">Starting from <span className="font-weight-semibold">$49.99</span></span><a className="btn btn-pill btn-outline-primary btn-sm" href="shop-style1-ls.html">Shop clothing</a>
          </Link>
        </div>
      </div>
    </div>
  
  </div>
</div>

</Link>
    </>
  )
}

export default MainPageProduct
