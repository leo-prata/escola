import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default function reduxPer(reducers){
    const persistedReducers = persistReducer(
        {
            key: 'ESCOLA',
            storage,
            whitelist: ['auth'], //coming from rootReducer's key
        },
        reducers);

        return persistedReducers;
}