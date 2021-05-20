const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(createProxyMiddleware('/user/login', {
        target: 'http://localhost:8080',
        changeOrigin: true,
    }))
    app.use(createProxyMiddleware('/user/register', {
        target: 'http://localhost:8080',
        changeOrigin: true,
    }))
};



