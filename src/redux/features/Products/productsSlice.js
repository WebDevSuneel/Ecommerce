import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initaileSateproduct={
    loading:false,
    arrproduct:[],
    error:'',
    selectedCategoy:'selected Categoy'
}

export const feachproduct=createAsyncThunk('product/feachproduct',()=>{
    return axios.get('https://dummyjson.com/product').then((respons)=>{    
    return respons.data
    }).then((error)=>{
        return error
    })
})

const productSlice=createSlice({
    name:'product',
    initialState:initaileSateproduct,
    reducers:{
     changeproduct:(state,action)=>{
       state.selectedCategoy=action.payload
     }
    },
    extraReducers:(builder)=>{
        builder.addCase(feachproduct.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(feachproduct.fulfilled,(state,action)=>{
            state.loading=false;
            state.arrproduct=action.payload.products
        })
        builder.addCase(feachproduct.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload
        })
    }
})

export default productSlice