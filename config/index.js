if (process.env.NODE_ENV === 'production') {
    console.log(`prod YOPTA + ${process.env.NODE_ENV}`);
    module.exports = require('./webpack.production.config');
} else {
    console.log(`dev YOPTA + ${process.env.NODE_ENV}`);
    module.exports = require('./webpack.development.config');
}