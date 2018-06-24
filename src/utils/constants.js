let __API_SERVER__ = 'https://cnodejs.org/api/v1/';

export default {
  SERVER_URL: process.env.NODE_ENV === 'production'&&__API_SERVER__ ? __API_SERVER__ : '/',
}
