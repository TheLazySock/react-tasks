import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

function renderHTML(html) {
    return `
        <!DOCTYPE html>
        <html>

        <head>
            <meta charset="utf-8">
            <title>
                React Tasks App PRERENDER
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
        const htmlString = renderToString(<App />);

        res.send(renderHTML(htmlString));
    };
}