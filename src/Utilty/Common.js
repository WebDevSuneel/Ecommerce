export function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export function getPriceAfterDiscount(price,disPrcentge){
    let p=price - price * (disPrcentge/100)
    return p.toFixed(2)
}

export function getTotalPriceCard(arrCard,couponCodeState){
 let price=0
 let totalPrice=0
 for(let e of arrCard){
    price += getPriceAfterDiscount(
        e.Product.price,
        e.Product.discountPercentage
    )* e.quntity
 }

 if(arrCard.length>0){
 totalPrice=price+10
 }
 if(arrCard.length>0&&'sunil100'===couponCodeState){
    totalPrice=price-100
 }
 
 return getPrecisionNumber(totalPrice)
}

export function getPrecisionNumber(no,precision=2){
    return parseFloat(no).toFixed(precision)
}


export function applyCouponCode(CouponCode){
let Code=0
if('sunil100'==CouponCode){
  return  Code-=100
}
else{
 console.log('invalid Apply CouponCode');
}
}