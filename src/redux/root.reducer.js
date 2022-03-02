import {combineReducers} from "redux";

import userReducer from "./user/user.reducer";
import directoryReducer from "./directory/directory.reducer";

// Combine Reducer is used to combine all the reducers(user, cart) so that in store.js we don't have to import every reducer in createStore.
export default combineReducers({
    user: userReducer,
    directory: directoryReducer,
});