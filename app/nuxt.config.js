const bodyParser = require('body-parser');
const session = require('./api/config/session');

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'movieDashBoard',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~node_modules/bootstrap/dist/css/bootstrap.min.css",
    "~styles/common.scss",
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vue-toast-notification',
    '~plugins/fontawesome.js',
    '~plugins/common.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-socket-io',
  ],
  io: {
    // module options
    sockets: [{
      name: 'main',
      url: 'http://juuck14.link:8081'
    }]
  },
  // express API 서버 등록
  serverMiddleware: [
    '~/api',
    bodyParser.json(),
    // session middleware
    session
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "http://juuck14.link:8081/api",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // target: 'static', // 정적 웹사이트임을 명시
  // router: {
  //   base: '/movieDashBoard/' // github repository 이름 넣기
  // }
  server: {
	      port: 8080, // default: 3000
	      host: '0.0.0.0' // default: localhost
	    }
}
