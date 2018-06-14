import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import configureStore from './redux/store';
import App from './App';
import { URL, URLSearchParams } from 'url';
import fetch from 'isomorphic-fetch';
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
            <link href="/assets/bundle.css" rel="stylesheet" type="text/css">
        </head>

        <body>
            <div id="app">${html}</div>
            <script>
                window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script type="text/javascript" src="/bundle.js"></script>
        </body>

        </html>
    `;
}

export default function serverRenderer() {
    return (req, res) => {
        const { store } = configureStore();

        const context = {};

        const app = (
            <App
                Router={StaticRouter}
                store={store}
                location={req.url}
                context={context}
            />
        );

        const htmlString = renderToString(app);

        const preloadedState = store.getState();

        res.send(renderHTML(htmlString, preloadedState));
    };
}