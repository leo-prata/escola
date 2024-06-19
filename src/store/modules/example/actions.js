import * as types from '../types';

export function clickButtonRequest(){
    return {
        type: types.BUTTON_CLICK_REQUEST,
    }
}

export function clickButtonSuccess(){
    return {
        type: types.BUTTON_CLICK_SUCESS,
    }
}

export function clickButtonFailure(){
    return {
        type: types.BUTTON_CLICK_FAILURE,
    }
}