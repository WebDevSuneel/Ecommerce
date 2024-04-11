import React from 'react'
import Topber from '../../Components/Topber'
import Navbar from '../../Components/Navbar'
import Breadcrumb from './Breadcrumb'
import Place_Order from './Place_Order'
import Footer from '../../Components/Footer'
function Checkout() {
  return (
    <>
    <Topber/>
    <Navbar/>
    <Breadcrumb/>
    <Place_Order/>
    <Footer/>
   </>
  )
}

export default Checkout