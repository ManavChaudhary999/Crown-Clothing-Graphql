import UserType from "./user.types";

// This action will be called by components like App whenever new state of user is updated
// And this setCurrentUser object will be passsed as an parameter to userReducer function action argument

export const setCurrentUser = (user) =>({
    //type: "Set_Current_User",
    type: UserType.Set_Current_User,
    payload: user
});