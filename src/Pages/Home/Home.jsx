import React, {} from 'react'
import Topber from '../../Components/Topber'
import Navbar from '../../Components/Navbar'
import Carousel from './Carousel'
import Featured from './Featured'
import Categories from './Categories'
import Products from './Products'
import Offer from './Offer'
import Recent_Products from './Recent_Products'
import Vendor from './Vendor'
import Footer from '../../Components/Footer'
//import { getAllGategoriesFromApi } from '../../Utilty/ApiCall'
function Home() {
  //const [arrCategoy,setArrCategoy]=useState([]);
  //const [selectedCategoy,setSelectedCategoy]=useState('Gategories')
  // useEffect(()=>{
  // let p=  getAllGategoriesFromApi()
  //  p.then((data)=>{
  //   setArrCategoy(data)
  //  },(error)=>{
  //   console.log(error);
  //  })
  // },[])

  return (
    <>
     <Topber/>
     <Navbar/>
     <Carousel/>
     {/* <Featured/>
     <Categories/> */}
     <Products/>
     {/* <Offer/>
     <Recent_Products/>
     <Vendor/> */}
     <Footer/>
     </>

  )
}

export default Home