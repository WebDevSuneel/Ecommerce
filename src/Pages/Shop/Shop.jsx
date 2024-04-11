import React from 'react'
import Topber from '../../Components/Topber'
import Navbar from '../../Components/Navbar'
import Breadcrumb from './Breadcrumb'
import Shop_List from './Shop_List'
import Footer from '../../Components/Footer'
function Shop() {
  return (
    <>
     <Topber/>
     <Navbar/>
    <Breadcrumb/>
    <Shop_List/>
    <Footer/>
    </>
  )
}

export default Shop