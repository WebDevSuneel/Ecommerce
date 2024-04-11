import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cardSlice from '../../redux/features/Cart/cartSlice'
import { getPrecisionNumber, getPriceAfterDiscount, getTotalPriceCard } from '../../Utilty/Common'
import { NavLink } from 'react-router-dom'

function Shopping_Cart() {
  const [couponCodeState,setcouponCodeState]=useState('')
  const [applycode,setapplycode]=useState(0)
  const arrCard=useSelector((state)=>state.card.arrCard)
  const dispatch=useDispatch()
  function increaseQuauntityOfItem_click(productId){
    let product=arrCard.find(e=>e.Product.id===productId)
    dispatch(cardSlice.actions.increaseQuauntityOfItem(product))
  }
  function decreaseQuauntityOfItem_click(productId){
    let product=arrCard.find(e=>e.Product.id===productId)
    dispatch(cardSlice.actions.decreaseQuauntityOfItem(product))
  }
  function removeItemFromCard_click(productId){
    let product=arrCard.find(e=>e.Product.id===productId)
    dispatch(cardSlice.actions.removeItemFromCard(product))
  }
  function applyCoupon_click(){
//  let Code='sunil100'
// if(Code==couponCodeState){
//    setapplycode(100)
//   }
// else{
//  console.log('invalid Apply CouponCode');
// }
  getTotalPriceCard(arrCard,couponCodeState)

}
  function couponCodeByUser(e){
    setcouponCodeState(e.target.value);
  }

  let applyCouuponCode=applycode
  return (
    <>
  {/* Cart Start */}
  <div className="container-fluid">
    <div className="row px-xl-5">
      <div className="col-lg-8 table-responsive mb-5">
        <table className="table table-light table-borderless table-hover text-center mb-0">
          <thead className="thead-dark">
            <tr>
              <th>Products</th>
              <th>Discounted Price</th>
              <th>Actual Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className="align-middle">
           {arrCard.map((e,i)=>( <tr>
              <td key={i} className="align-middle">
                <img src={e.Product.thumbnail} alt="" style={{ width: 50 }} />{" "}
                {e.Product.title}
              </td>
              <td className="align-middle"> {getPriceAfterDiscount(e.Product.price,e.Product.discountPercentage)}</td>
              <td className="align-middle"> <del>{e.Product.price}</del></td>
              <td className="align-middle">
                <div
                  className="input-group quantity mx-auto"
                  style={{ width: 100 }}
                >
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-primary btn-minus" 
                    onClick={()=>decreaseQuauntityOfItem_click(e.Product.id)}>
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-sm bg-secondary border-0 text-center"
                    value={e.quntity}
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-primary btn-plus"
                    onClick={()=>increaseQuauntityOfItem_click(e.Product.id)}>
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
              </td>
              <td className="align-middle">{getPrecisionNumber(getPriceAfterDiscount(e.Product.price,e.Product.discountPercentage)*e.quntity)}</td>
              <td className="align-middle">
                <button className="btn btn-sm btn-danger"
                onClick={()=>removeItemFromCard_click(e.Product.id)}
                >
                  <i className="fa fa-times" />
                </button>
              </td>
            </tr>))}
          </tbody>
        </table>
      </div>
      <div className="col-lg-4">
        <form className="mb-30" action="">
          <div className="input-group">
            <input
              type="text"
              className="form-control border-0 p-4"
              placeholder="Coupon Code"
              onChange={couponCodeByUser}
            />
            <div className="input-group-append">
              <a className="btn btn-primary" onClick={applyCoupon_click}>Apply Coupon</a>
            </div>
          </div>
        </form>
        <h5 className="section-title position-relative text-uppercase mb-3">
          <span className="bg-secondary pr-3">Cart Summary</span>
        </h5>
        <div className="bg-light p-30 mb-5">
          <div className="border-bottom pb-2">
            <div className="d-flex justify-content-between mb-3">
              <h6>Subtotal</h6>
              <h6>{getTotalPriceCard(arrCard)}</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6 className="font-weight-medium">Shipping</h6>
              <h6 className="font-weight-medium">$10</h6>
            </div>
          </div>
          <div className="pt-2">
            <div className="d-flex justify-content-between mt-2">
              <h5>Total</h5>
              <h5>{getTotalPriceCard(arrCard)}</h5>
            </div>
            <NavLink to={'/checkout'}>
            <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">
              Proceed To Checkout
            </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Cart End */}
</>

  )
}

export default Shopping_Cart