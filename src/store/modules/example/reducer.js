import * as types from '../types';

const initialState = {
    buttonClick: false,
}
export default function red(state = initialState, action) {
    switch(action.type){
        case types.BUTTON_CLICK_SUCESS:
            const newState = { ...state};
            newState.buttonClick = !newState.buttonClick;
            return newState;

        case types.BUTTON_CLICK_REQUEST:
            console.log('erro');
            return state;

        case types.BUTTON_CLICK_FAILURE:
            console.log('fazendo req');
            return state;
        
        default:
            return state;
    }
}

