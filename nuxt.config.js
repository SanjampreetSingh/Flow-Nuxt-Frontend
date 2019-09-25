export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favico.ico' },
      { rel: 'stylesheet', href:'https://unpkg.com/buefy/dist/buefy.min.css' },     
      { rel: 'stylesheet', href:'https://use.fontawesome.com/releases/v5.2.0/css/all.css' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/main'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src:'~/plugins/buefy', ssr: false },
    { src:'~/plugins/auth', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    'nuxt-svg-loader',
    'nuxt-validate'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'http://127.0.0.1:8000/api'
  },
  auth: {
    plugins: [ '~/plugins/auth.js' ],
    redirect: {
        callback: '/callback'
    },
    strategies: {
        local: {
            endpoints: {
                login: { url: 'authenticate/', method: 'post', propertyName: 'data.token' },
                user: { url: 'user-details', method: 'get', propertyName: 'data.user' },
                logout: false
            }
        },
        github: {
            client_id: 'e25d91836a3e77079400',
            client_secret: 'c033f10268125ab62046b0cf8aface986ac64984',
        }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
