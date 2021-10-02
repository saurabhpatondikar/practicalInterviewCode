
import ActionType from "../utility/actionTypes";


export const addUser = (dispatch, item) => {
    dispatch({
        type: ActionType.ADD_USER_REQUEST
    })

    dispatch({
        type: ActionType.ADD_USER_SUCCESS,
        userData: item
    })

};

const reducer = (state = {}, action) => {
    switch (action.type) {
        case ActionType.ADD_USER_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case ActionType.ADD_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                userData: action.userData,
            };
        }
        case ActionType.ADD_USER_FAIL: {
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
