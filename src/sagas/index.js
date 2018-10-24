import {takeLatest} from 'redux-saga';
import {call, put} from 'redux-saga/lib/effects';
import Axios from 'axios'
import {push} from 'connected-react-router'

import SERVER_URL from '../server_url';

import {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAILURE,
    FETCH_PROFILE,
    SUCCESS_PROFILE,
    FAILURE_PROFILE,
    LOG_OUT
} from '../actions';

function authorize() {
    console.log('In Saga')
    Axios
        .get(`${SERVER_URL}/auth/facebook`)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

function saveToken(action) {
    localStorage.setItem('token', action.payload);
}

function fetchProfileApi(token) {
    return Axios.get(`${SERVER_URL}/profile`, {
        headers: {
            Authorization: `JWT ${token}`
        }
    });
}

function fetchLogoutApi(){
    return Axios.get(`${SERVER_URL}/auth/logout`)
}

function * fetchProfileSaga(action) {
    console.log(action.payload)

    try {
        const response = yield call(fetchProfileApi, action.payload);
        const data = response.data;
        yield put({type: SUCCESS_PROFILE, payload: data})
    } catch (err) {
        console.log("ERROR", err);
        yield put({type: FAILURE_PROFILE, payload: err})
    }
}

function* logOutSaga(){
    localStorage.clear();
    try{
        yield call(fetchLogoutApi);
        yield put({
            type: 'REMOVE_TOKEN'
        });
        yield put(push('/'));
    } catch(err){
        console.log(err)
    }
    
}

function * Saga() {
    yield takeLatest(AUTH_REQUEST, authorize);
    yield takeLatest(AUTH_SUCCESS, saveToken);
    yield takeLatest(FETCH_PROFILE, fetchProfileSaga);
    yield takeLatest(LOG_OUT, logOutSaga);
}

export default Saga;
