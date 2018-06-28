import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { URL, URLSearchParams } from 'url';
import configureStore from './redux/store';
import App from './App.jsx';

global.URLSearchParams = URLSearchParams;
global.URL = URL;
global.location = {};

function renderHTML(html, preloadedState) {
    return `
        <!doctype html>
        <html>

        <head>
            <meta charset="utf-8">
            <title>
                React Tasks App
            </title>
            ${process.env.NODE_ENV === 'development'
        ? ''
        : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        </head>

        <body>
            <div id="app">${html}</div>
            <script>
                window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script type="text/javascript" src="/js/main.js"></script>
        </body>

        </html>
    `;
}

export default function serverRenderer() {
    return (req, res) => {
        const { store } = configureStore();

        const context = {};
        const location = {
            pathname: req.path,
            search: req.url,
        };

        const app = (
            <App
                Router={StaticRouter}
                store={store}
                location={location}
                context={context}
            />
        );

        const htmlString = renderToString(app);

        const preloadedState = store.getState();
        preloadedState.searchQuery.searchQuery = req.query.search;

        res.send(renderHTML(htmlString, preloadedState));
    };
}
