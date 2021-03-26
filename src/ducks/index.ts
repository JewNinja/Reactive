import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import usersReducer from './users'
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  users: usersReducer,
});

type RootReducerType = typeof reducers;
export type StateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store;