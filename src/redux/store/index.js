import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';

const config = {
    key: 'storage',
    storage,
};

const persistedReducer = persistReducer(config, rootReducer);

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

export default (initialState) => {
    const store = createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

    const persistor = persistStore(store);

    return { store, persistor };
};
