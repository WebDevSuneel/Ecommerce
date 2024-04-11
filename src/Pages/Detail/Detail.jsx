import React from 'react'
import Topber from '../../Components/Topber'
import Navbar from '../../Components/Navbar'
import Breadcrumb from './Breadcrumb'
import Shop_Detail from './Shop_Detail'
import Products from './Products'
import Footer from '../../Components/Footer'
function Detail() {
  return (
    <>
    <Topber/>
    <Navbar/>
    <Breadcrumb/>
    <Shop_Detail/>
    <Products/>
    <Footer/>
   </>
  )
}

export default Detail