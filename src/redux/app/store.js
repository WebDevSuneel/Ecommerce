import {configureStore} from '@reduxjs/toolkit'
import categorySlice from '../features/Category/categorySlice'
import productSlice from '../features/Products/productsSlice'
import cardSlice from '../features/Cart/cartSlice'

const store=configureStore({
     reducer:{
        category:categorySlice.reducer,
        product:productSlice.reducer,
        card:cardSlice.reducer
     }
})

export default store