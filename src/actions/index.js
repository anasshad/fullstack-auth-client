export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const FETCH_PROFILE = 'FETCH_PROFILE';
export const SUCCESS_PROFILE = 'SUCCESS_PROFILE';
export const FAILURE_PROFILE = 'FAILURE_PROFILE';

export const LOG_OUT = 'LOG_OUT';

export const authRequest = (authType) => {
    return {
        type: AUTH_REQUEST,
        payload: authType
    }
}

export const authSuccess = (token) => {
    return {
        type: AUTH_SUCCESS,
        payload: token
    }
}

export const fetchProfile = (token) => {
    return {
        type: FETCH_PROFILE,
        payload: token
    }
}

export const logOut = () => {
    return {
        type: LOG_OUT
    }
}