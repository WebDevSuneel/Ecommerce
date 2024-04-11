import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initaileSateCategory={
    loading:false,
    arrCategory:[],
    error:'',
    selectedCategoy:'selected Categoy'
}

export const feachCategory=createAsyncThunk('category/feachCategory',()=>{
    return axios.get('https://dummyjson.com/products/categories').then((respons)=>{
         return respons.data
    }).then((error)=>{
        return error
    })
})

const categorySlice=createSlice({
    name:'category',
    initialState:initaileSateCategory,
    reducers:{
     changeCategory:(state,action)=>{
       state.selectedCategoy=action.payload
     }
    },
    extraReducers:(builder)=>{
        builder.addCase(feachCategory.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(feachCategory.fulfilled,(state,action)=>{
            state.loading=false;
            state.arrCategory=action.payload
        })
        builder.addCase(feachCategory.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload
        })
    }
})

export default categorySlice