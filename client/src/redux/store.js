import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import petitionsReducer from './reducers/reducerPetitions';
import shoppingReducer from './reducers/reducerShoppingCart';
import filterReducer from "./reducers/reducersFilter"
import reducerAdmin from './reducers/reducerAdmin';

const rootReducer = combineReducers({
    petitionsReducer,
    filterReducer,
    shoppingReducer,
    reducerAdmin
})

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));

export default store;