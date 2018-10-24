import {AUTH_SUCCESS, AUTH_FAILURE, SUCCESS_PROFILE, FAILURE_PROFILE} from '../actions';

const initialState = {
    error: null,
    profile: null
}

export default(state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            {
                return {
                    ...state,
                    token: action.payload
                };
            }
        case AUTH_FAILURE:
            {
                return {
                    ...state,
                    error: action.payload
                }
            }
        case SUCCESS_PROFILE:
            {
                return {
                    ...state,
                    profile: action.payload
                }
            }
        case FAILURE_PROFILE:
            {
                return {
                    ...state,
                    error: action.payload
                }
            }
        case 'REMOVE_TOKEN':
            {
                return {
                    ...state,
                    token: null
                }
            }
        default:
            return state;

    }
}