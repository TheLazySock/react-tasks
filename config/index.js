if (process.env.NODE_ENV === 'production') {
    module.exports = require('./webpack.production.config'); // eslint-disable-line global-require
} else {
    module.exports = require('./webpack.development.config'); // eslint-disable-line global-require
}
