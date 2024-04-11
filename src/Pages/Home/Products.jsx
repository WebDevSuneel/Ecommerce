import React, { useEffect, useState } from 'react'
import FeaturedSingelProducts from './FeaturedSingelProducts'
import { useDispatch, useSelector } from 'react-redux'
import { feachproduct} from '../../redux/features/Products/productsSlice'
//import { getAllProductsFromApi } from '../../Utilty/ApiCall';

function Products() {
  //const [arrProducts,setArrProducts]=useState([]);
  //const [selectedCategoy,setSelectedCategoy]=useState('Gategories')
  // useEffect(()=>{
  // let p= getAllProductsFromApi()
  //  p.then((data)=>{
  //   setArrProducts(data.products)
  //  },(error)=>{
  //   console.log(error);
  //  })
  // },[])
  const productState =useSelector((state)=>
    state.product
  )
  const selectedCategoy=useSelector((state)=>state.category.selectedCategoy)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(feachproduct())
  },[])
  if(productState.loading || productState.arrproduct.length===0){
    <h1>Loding...</h1>
  }
  else{
  return (
    <>
    {/* Products Start */}
    <div className="container-fluid pt-5 pb-3">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Featured Products</span>
      </h2>
      <div className="row px-xl-5">
         {productState.arrproduct.filter(e=>e.category.toUpperCase()==selectedCategoy.toUpperCase()).map((e,index)=>(<FeaturedSingelProducts key={index} Product={e}/>))}
      </div>
    </div>
    {/* Products End */}
  </>
  
  )
  }
}

export default Products