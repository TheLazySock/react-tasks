import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { PersistGate } from 'redux-persist/es/integration/react';
import App from './App.jsx';
import ErrorBoundary from './containers/ErrorBoundary';

import configureStore from './redux/store';

const { store, persistor } = configureStore(window.PRELOADED_STATE);

/**
 * Для сохранения состояния в оффлайне и восстановления его после открытия сайта используется
 * библиотека redux-persist.
 * PersistGate -- компонент, позволяющий без особых усилий сохранять state в localStorage
 * и восстанавливать его при открытии сайта снова.
 * Над роутером он по той причине, что почему-то если пихнуть его внутрь роутера, то
 * не будут работать переходы. В смысле URL меняется, а вот компоненты не отрендериваются.
 * Почему -- не знаю. Понять так и не вышло
 */

hydrate(
    <PersistGate persistor={persistor}>
        <ErrorBoundary>
            <App
                store={store}
                Router={Router}
            />
        </ErrorBoundary>
    </PersistGate>,
    document.getElementById('app'),
);
