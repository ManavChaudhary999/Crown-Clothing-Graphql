import {shopActionType} from "./shop.actionType";

export const UpdateShopCollection = shopCollectionMap => ({
    type: shopActionType.UPDATE_COLLECTION,
    payload: shopCollectionMap
});