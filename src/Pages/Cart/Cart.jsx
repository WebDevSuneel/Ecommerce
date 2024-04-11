import React from 'react'
import Topber from '../../Components/Topber'
import Navbar from '../../Components/Navbar'
import Breadcrumb from './Breadcrumb'
import Shopping_Cart from './Shopping_Cart'
import Footer from '../../Components/Footer'

function Cart() {
  return (
    <>
     <Topber/>
     <Navbar/>
      <Breadcrumb/>
      <Shopping_Cart/>
      <Footer/>
    </>
  )
}

export default Cart