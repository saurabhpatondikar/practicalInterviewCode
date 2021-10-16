
import ActionType from "../utility/actionTypes";

export const userLogged = (dispatch, loggedIn) => {
    dispatch({
        type: ActionType.USER_LOGGED_SUCCESS,
        loggedIn: loggedIn
    })
};
let initailState = {
    loggedIn: false
}
const reducer = (state = initailState, action) => {
    switch (action.type) {
        case ActionType.USER_LOGGED_SUCCESS: {
            return {
                ...state,
                loggedIn: action.loggedIn,
            };
        }

        case ActionType.USER_LOGGED_FAIL: {
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
