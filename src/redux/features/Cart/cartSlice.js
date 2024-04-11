import {createSlice} from '@reduxjs/toolkit'

const initaileSateCard={arrCard:[]}

const cardSlice=createSlice({
    name:'card',
    initialState:initaileSateCard,
    reducers:{
     addItemToCard:(state,action)=>{
        let cardObject=action.payload
        let obj=state.arrCard.find(e=>e.Product.id==cardObject.Product.id)
        if(obj){
            obj.quntity++;
        }
        else{
            state.arrCard.push(cardObject)
        }
     },
     removeItemFromCard:(state,action)=>{
        let cardObject=action.payload
        let index=state.arrCard.findIndex(e=>e.Product.id==cardObject.Product.id)
        if(index!=-1){
           state.arrCard.splice(index,1) 
        }
    },
    increaseQuauntityOfItem:(state,action)=>{
        let cardObject=action.payload
        let obj=state.arrCard.find(e=>e.Product.id==cardObject.Product.id)
        if(obj){
            obj.quntity++;
        }
    },
    decreaseQuauntityOfItem:(state,action)=>{
        let cardObject=action.payload
        let obj=state.arrCard.find(e=>e.Product.id==cardObject.Product.id)
        let index=state.arrCard.findIndex(e=>e.Product.id==cardObject.Product.id)
        if(obj){
            if(obj.quntity>1)
            obj.quntity--;
            else{
                state.arrCard.splice(index,1) 
               }
        }
    }
    }
    
})

export default cardSlice