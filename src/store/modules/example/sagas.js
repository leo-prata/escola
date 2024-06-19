import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const req = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 2000);
});

function* exampleReq(){
    try{
        yield call(req);
        yield put(actions.clickButtonSuccess());
    }catch{
        toast.error('Error');
        yield put(actions.clickButtonFailure());
    }
}

export default all([takeLatest(types.BUTTON_CLICK_REQUEST, exampleReq)]);