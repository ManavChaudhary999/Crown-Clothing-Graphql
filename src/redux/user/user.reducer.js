import UserType from "./user.types";

// Default State
const Initial_State = {
    currentUser: null
};

// This reducer is called automatically by redux store function whenever state changes or userAction(setCurrentUser)  is called by components
const userReducer = (state = Initial_State, action) => {
    switch (action.type) {

        case UserType.Set_Current_User:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;