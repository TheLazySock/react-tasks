import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';

const config = {
    key: 'storage',
    storage
}

const persistedReducer = persistReducer(config, rootReducer)

// const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
const persistor = persistStore(store);

// export default { store, persistor };
export default store;