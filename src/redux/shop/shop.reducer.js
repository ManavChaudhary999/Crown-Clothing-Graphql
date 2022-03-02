//import SHOP_DATA from "./shop.data";
import {shopActionType} from "./shop.actionType";

// Dont need initial state because fetching collection from firestore
// const Initial_State = {
//     collections: SHOP_DATA
// };

const shopReducer = (state=null, action) => {
    switch (action.type) {
        case shopActionType.UPDATE_COLLECTION:
            return {
                ...state,
                collections: action.payload
            };
            
        default:
            return state;
    }
};

export default shopReducer;