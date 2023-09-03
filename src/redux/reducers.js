// reducers 

import {  ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

const cart = []


export const cartReducer = (state = cart, action) =>{
    switch(action.type){
        case ADD_TO_CART:
            return 1
        case REMOVE_FROM_CART:
            return 10
        case EMPTY_CART:
            return 100
        default: 
            return state;
    }
}










// const cartReducer = (state, action) =>{
//     switch(action.type){
//         case ADD_TO_CART:

//     }
// }