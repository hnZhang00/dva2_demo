var path = require('path');
var proxyTarget = {
  'target': 'https://cnodejs.org/api/v1/',
  'changeOrigin': true
};

export default {
  alias: {
    'src': path.resolve(__dirname, 'src'),
    'assets': path.resolve(__dirname, 'src/assets'),
    'pages': path.resolve(__dirname, 'src/pages'),
    'models': path.resolve(__dirname, 'src/models'),
    'components': path.resolve(__dirname, 'src/components'),
    'utils': path.resolve(__dirname, 'src/utils'),
    'api': path.resolve(__dirname, 'src/api')
  },
  proxy: {
    '/': proxyTarget
  }
}
