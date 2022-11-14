import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducerPetitions';
import shoppingReducer from './reducers/reducerShoppingCart';


const reducer = combineReducers({
    petitions: rootReducer,
    shoppingCart: shoppingReducer
})

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(thunk)));


export default store;