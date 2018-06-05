import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { browserHistory } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import './assets/App.scss';
import App from './App';
import SearchPage from './containers/SearchPage';
import MoviePage from './containers/MoviePage';
import NotFoundPage from './containers/NotFoundPage';
import ErrorBoundary from './containers/ErrorBoundary';

import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';

/**
 * Для сохранения состояния в оффлайне и восстановления его после открытия сайта используется 
 * библиотека redux-persist.
 * 
 * PersistGate -- компонент, позволяющий без особых усилий сохранять state в localStorage 
 * и восстанавливать его при открытии сайта снова.
 * Над роутером он по той причине, что почему-то если пихнуть его внутрь роутера, то 
 * не будут работать переходы. В смысле URL меняется, а вот компоненты не отрендериваются.
 * Почему -- не знаю. Понять так и не вышло
 */
render(
    <PersistGate persistor={persistor}>
        <Router history={browserHistory}>
            <Provider store={store}>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </Provider>
        </Router>
    </PersistGate>,
    document.getElementById('app')
);
