const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:4444',
      changeOrigin: true,
      logLevel: 'info'
    })
  );
};