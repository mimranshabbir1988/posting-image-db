import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const SingleProduct = () => {

  const [product, setProduct] = useState([]);

  const {id} = useParams()


  const getProductData = async () => {
    let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(data);
  };

  useEffect(() => {
    getProductData();
  }, []);
  
  
  return (
    <>
      
           
      

  <div className="container my-5">
  <div className="card">
    <div className="card-body">
      <h3 className="card-title mb-5 fw-bold text-warning">{product.title}</h3>
      {/* <h6 className="card-subtitle">globe type chair for rest</h6> */}
      <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-6">
          <div className="white-box text-center"><img src={product.image} className="img-responsive" width={350} height={400} /></div>
        </div>
        <div className="col-lg-7 col-md-7 col-sm-6">
          <h4 className="box-title fw-bolder fs-1 mt-5 mb-4">Product Description</h4>
          <p className="lead">
            {product.description}
          </p>
          <p className="lead text-success fw-bolder fs-4">
            RATINGS: {product.rating && product.rating.rate} And Rating Count: {product.rating && product.rating.count}
          </p>
          <h2 className="mt-5">
            ${product.price}<small className="text-success">(36%off)</small>
          </h2>
          <button className="btn btn-dark btn-rounded me-2" data-toggle="tooltip" title data-original-title="Add to cart">
            <i className="fa fa-shopping-cart" />
          </button>
          <button className="btn btn-primary btn-rounded">Buy Now</button>
          <h3 className="box-title mt-5">Key Highlights</h3>
          <ul className="list-unstyled">
            <li><i className="fa fa-check text-success" />High quality product</li>
            <li><i className="fa fa-check text-success" />Azadi offer during August 2023</li>
            <li><i className="fa fa-check text-success" />Perfect furniture to flaunt your wonderful collectibles</li>
          </ul>
        </div>
        {/* <div className="col-lg-12 col-md-12 col-sm-12">
          <h3 className="box-title mt-5">General Info</h3>
          <div className="table-responsive">
            <table className="table table-striped table-product">
              <tbody>
                <tr>
                  <td width={390}>Brand</td>
                  <td>ABC</td>
                </tr>
                <tr>
                  <td>Delivery Condition</td>
                  <td>Knock Down</td>
                </tr>
                <tr>
                  <td>Seat Lock Included</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>Office Chair</td>
                </tr>
                <tr>
                  <td>Style</td>
                  <td>Contemporary&amp;Modern</td>
                </tr>
                <tr>
                  <td>Wheels Included</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Upholstery Included</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Upholstery Type</td>
                  <td>Cushion</td>
                </tr>
                <tr>
                  <td>Head Support</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Suitable For</td>
                  <td>Study&amp;Home Office</td>
                </tr>
                <tr>
                  <td>Adjustable Height</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Model Number</td>
                  <td>F01020701-00HT744A06</td>
                </tr>
                <tr>
                  <td>Armrest Included</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Care Instructions</td>
                  <td>Handle With Care,Keep In Dry Place,Do Not Apply Any Chemical For Cleaning.</td>
                </tr>
                <tr>
                  <td>Finish Type</td>
                  <td>Matte</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
    </div>
  </div>
    </div>

    </>
  )
}

export default SingleProduct
