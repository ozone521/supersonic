export default {
  dev: {
    '/api/': {
      target: 'http://172.21.42.220:9080', // 'http://127.0.0.1:9080',
      changeOrigin: true,
    },
  },
};
