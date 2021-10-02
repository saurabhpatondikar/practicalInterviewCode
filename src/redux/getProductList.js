
import ActionType from "../utility/actionTypes";

export const getProductList = (dispatch) => {
    dispatch({
        type: ActionType.GET_LIST_REQUEST
    })
    dispatch({
        type: ActionType.GET_LIST_SUCCESS,
    })
};
export const updateProduct = (dispatch, item, itemPrev) => {
    let items = getProductList(dispatch)
    if (items) {
        let index = items.findIndex(item => {
            return item.name === itemPrev.name
        })
        if (index >= 0)
            items = items.splice(index, 1);
        dispatch({
            type: ActionType.UPDATE_PRODUCT_SUCCESS,
            productList: [...items, item]
        })
    }
};
export const addProduct = (dispatch, item) => {
    let items = getProductList(dispatch)
    dispatch({
        type: ActionType.ADD_PRODUCT_SUCCESS,
        productList: items && items.length > 0 ? [...items, item] : [item]
    })
};
let initailState = {
    loading: false,
    productList: []
}
const reducer = (state = initailState, action) => {
    switch (action.type) {
        case ActionType.GET_LIST_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case ActionType.GET_LIST_SUCCESS: {
            return {
                ...state,
                loading: false,
                productList: [...state.productList],
            };
        }
        case ActionType.UPDATE_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                productList: action.productList,
            };
        }
        case ActionType.ADD_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                productList: action.productList,
            };
        }
        case ActionType.GET_LIST_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        }

        default: {
            return state;
        }
    }
};
export default reducer;
