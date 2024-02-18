const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

/*
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = {
  devServer: {
    before: function (app) {
      app.use(
        '/api',
        createProxyMiddleware({
          target: 'https://criptoya.com',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/api',
          },
        })
      );
    },
  },
};
module.exports = {
  devServer: {
    proxy: 'http://localhost:8080',
  },
};*/