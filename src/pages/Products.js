import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProductData = async () => {
    let { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div>
      <h1 className="text-primary text-center my-5 display-5 fw-bold">List of Products</h1>


      <div>

  
  <div className="container">
   
    <div className="row my-5">
      {
        products.map(pro=>{
          return(
            <>
<div className="col-md-3 col-sm-6 my-3">
        <div className="product-grid6">
          <div className="product-image6">
  
            <Link to={`/products/${pro.id}`}>
              <img className="card-img-top cardImagStyle" src={pro.image} />
            </Link>
          </div>
          <div className="product-content">
            <h3 className="title"><a href="#">{pro.title.slice(0,12)}...</a></h3>
            <div className="price">$11.00
              <span>$ {pro.price}</span>
            </div>
          </div>
          <ul className="social">
            <li><a href data-tip="Quick View"><i className="fa fa-search" /></a></li>
            <li><a href data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
            <li><a href data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
          </ul>
        </div>
      </div>

            </>
          )
        })
      }
      {/* <div className="col-md-3 col-sm-6">
        <div className="product-grid6">
          <div className="product-image6">
            <a href="#">
              <img className="pic-1" src="https://www.bootdey.com/image/280x300/4682B4/000000" />
            </a>
          </div>
          <div className="product-content">
            <h3 className="title"><a href="#">Women's Red Top</a></h3>
            <div className="price">$8.00
              <span>$12.00</span>
            </div>
          </div>
          <ul className="social">
            <li><a href data-tip="Quick View"><i className="fa fa-search" /></a></li>
            <li><a href data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
            <li><a href data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="product-grid6">
          <div className="product-image6">
            <a href="#">
              <img className="pic-1" src="https://www.bootdey.com/image/280x300/40E0D0/000000" />
            </a>
          </div>
          <div className="product-content">
            <h3 className="title"><a href="#">Men's Shirt</a></h3>
            <div className="price">$11.00
              <span>$14.00</span>
            </div>
          </div>
          <ul className="social">
            <li><a href data-tip="Quick View"><i className="fa fa-search" /></a></li>
            <li><a href data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
            <li><a href data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="product-grid6">
          <div className="product-image6">
            <a href="#">
              <img className="pic-1" src="https://www.bootdey.com/image/280x300/FFB6C1/000000" />
            </a>
          </div>
          <div className="product-content">
            <h3 className="title"><a href="#">Men's Shirt</a></h3>
            <div className="price">$11.00
              <span>$14.00</span>
            </div>
          </div>
          <ul className="social">
            <li><a href data-tip="Quick View"><i className="fa fa-search" /></a></li>
            <li><a href data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
            <li><a href data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
          </ul>
        </div>
      </div> */}
    </div>
  </div>
  <hr />

</div>







      
      {/* <div className="">
        <div className="row">
          {products.map(pro => {
            return (
              <div className="col-lg-3 col-md-6 col-12 my-4" key={pro.id}>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={pro.image} height={250} className="card-img-top" alt="pro.title" />
                  <div className="card-body">
                    <h5 className="card-title">{pro.title.slice(0,10)}...</h5>
                    <p className="card-text">
                      {pro.description.slice(0,40)}...
                    </p>
                    <p className="card-text">
                      Rs. {pro.price}/-
                    </p>
                    <Link to={`/products/${pro.id}`} className="btn btn-dark">
                      BUY NOW
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default Products;
