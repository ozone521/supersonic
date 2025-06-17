const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/chatsuperapi',
    createProxyMiddleware({
      target: 'http://172.21.42.220:9080', // 'http://localhost:9080',
      changeOrigin: true,
    })
  );
  app.use(
    '/openapi',
    createProxyMiddleware({
      target: 'http://172.21.42.220:9080', // 'http://localhost:9080',
      changeOrigin: true,
    })
  );
};
