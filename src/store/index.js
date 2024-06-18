import { legacy_createStore as createStore } from 'redux';

const initialState = {
    buttonClick: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'BUTTON_CLICK':
            const newState = { ...state};
            newState.buttonClick = !newState.buttonClick;
            return newState;
        
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;