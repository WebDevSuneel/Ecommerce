import React, { useEffect } from 'react'
import { capitalizeFirstLetter } from '../Utilty/Common';
import { useDispatch, useSelector } from 'react-redux';
import categorySlice, { feachCategory } from '../redux/features/Category/categorySlice';

function Categories() {
  const categoryState=useSelector((state)=>state.category)
  
  const dispach=useDispatch()
  useEffect(()=>{
   dispach(feachCategory())
  },[])
 function gategoy_Click(e){
   dispach(categorySlice.actions.changeCategory(e.target.innerText))
  }
  if(categoryState===0){
    return <><h3 style={{color:'#FFF'}}>Loding...</h3></>
  }
  else{
  return (
    <>
     <div className="col-lg-3 d-none d-lg-block">
          <a
            className="btn d-flex align-items-center justify-content-between bg-primary w-100"
            data-toggle="collapse"
            href="#navbar-vertical"
            style={{ height: 65, padding: "0 30px" }}
          >
            <h6 className="text-dark m-0">
              <i className="fa fa-bars mr-2" />
              {categoryState.selectedCategoy}
            </h6>
            <i className="fa fa-angle-down text-dark" />
          </a>
          <nav
            className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
            id="navbar-vertical"
            style={{ width: "calc(100% - 30px)", zIndex: 999 }}
          >
            <div className="navbar-nav w-100">
           {categoryState.arrCategory.map((e,index)=>(<div data-toggle="collapse"
            href="#navbar-vertical" key={index} onClick={gategoy_Click} className="nav-item nav-link">               
                {capitalizeFirstLetter(e)}
              </div>))}
            </div>
          </nav>
        </div>
    </>
  )
  }
}

export default Categories