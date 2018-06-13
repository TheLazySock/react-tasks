import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';

const config = {
    key: 'storage',
    storage
}

const persistedReducer = persistReducer(config, rootReducer);

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Старый, рабочий вариант с undefined вместо initialState.
// Текущий вариант тоже работает, но почему — вопрос.
// const store = createStore(persistedReducer, undefined, composeEnhancers(applyMiddleware(thunk)));
// const persistor = persistStore(store);
const configureStore = (initialState) => {
    return createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
}

export { configureStore };

// Не работало, если в persistStore() передавать configureStore(). Почему — не знаю, но факт есть факт
// let store = configureStore();
// const persistor = persistStore(store);
// const persistor = persistStore(configureStore());

// export { configureStore, store, persistor };


// НОВЫЙ ВАРИАНТ!!!
// persistor создаётся уже на морде, в index.jsx.