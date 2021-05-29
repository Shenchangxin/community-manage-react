const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    // app.use(createProxyMiddleware('/api/**', {
    //     target: 'http://localhost:8080',
    //     changeOrigin: true,
    //     pathRewrite: {
    //         "^/api": "/api"
    //     }
    // }))
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/api',
            }
        })
    );
};
// const proxy = require('http-proxy-middleware');
// module.exports = function (app) {
//     app.use(proxy('/api/**', {
//         target: "http://localhost:8000/",
//         changeOrigin: true,
//     }))
//
// }



