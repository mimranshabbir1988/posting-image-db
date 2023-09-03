import React from 'react'
import Products from './Products'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import MainPageProduct from '../components/MainPageProduct'
import AzadiOffer from '../components/AzadiOffer'


const MainPage = () => {
  return (
    <div>
      <Slider />
      <MainPageProduct />
        <AzadiOffer />
      <MainPageProduct />
      <Footer />
    </div>
  )
}

export default MainPage
