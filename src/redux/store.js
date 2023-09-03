// configuring store
import {createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers'



const rootRed = combineReducers({
    cartReducer
})

const initialState = {}

const middleware = [thunk] 
// user api 
// products api
// jwt api 


const store = createStore(
    rootRed, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;

