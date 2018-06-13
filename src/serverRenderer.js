import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { configureStore, store } from './redux/store';
import { Provider } from 'react-redux';
import App from './App';

function renderHTML(html) {
    return `
        <!doctype html>
        <html>

        <head>
            <meta charset="utf-8">
            <title>
                React Tasks App
            </title>
            <link href="/assets/bundle.css" rel="stylesheet">
        </head>

        <body>
            <div id="app">${html}</div>
            <script type="text/javascript" src="/bundle.js"></script>
        </body>

        </html>
    `;
}

export default function serverRenderer() {
    return (req, res) => {

        const context = {};

        const app = (
            <App
                Router={StaticRouter}
                store={store}
                // loading={true}
                movies={[]}
            />
            // <App />
        );

        const htmlString = renderToString(app);


        res.send(renderHTML(htmlString));
    };
}