import { combineReducers } from "redux";
import counterReducer from "./Counter";
import loggedReducer from "./IsLoggedIn";
import { todoReducers } from "./Todo";



const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    myTodo: todoReducers
})

export default allReducers;

