import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import petitionsReducer from './reducers/reducerPetitions';
import filterReducer from './reducers/reducersFilter';

const rootReducer = combineReducers({
    petitionsReducer,
    filterReducer
})

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));


export default store;