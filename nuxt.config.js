export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Flow | Machine Intelligence Platform for Developers and Researchers',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
          name: 'description',
          content: `Corporations ranging from small to large scales can very easily leverage the capabilities of our trained precise machine learning model interfaces in their workflow. We are also building a powerful research platform where researchers and developers can experiment and deploy their custom machine learning models for their own personal use.`
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: `flowai, theflowai, ml, ai, ai api, face detection, facial landmark, machine learning, artificial intelligence`
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: `#2d2d2d`
      },
      {
        name:'robots',
        content:'INDEX,FOLLOW'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favico.ico' },
      { rel: 'stylesheet', href:'https://unpkg.com/buefy/dist/buefy.min.css' },     
      { rel: 'stylesheet', href:'https://use.fontawesome.com/releases/v5.2.0/css/all.css' },
      { rel: 'canonical', href: 'https://www.theflowai.com/' }
    ],
    script: [
      {
        src: 'https://www.google.com/recaptcha/api.js',
        async: true,
        defer: true
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#000' },
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
    { src:'~/plugins/auth', ssr: false },
    { src:'~/plugins/common', ssr: false },
    { src:'~/plugins/repository' },
    { src: '~/plugins/ga.js', ssr: false }
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
    'nuxt-svg-loader',
    'nuxt-validate',
    'nuxt-clipboard2',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  robots: [
    {
      UserAgent: '*',
      Disallow: ['/dashboard', '_nuxt']
    }
  ],
  sitemap: {
    hostname: 'https://theflowai.com',
    gzip: true,
    exclude: [
      '/dashboard',
      '/_nuxt'
    ],
    routes: [
      '/login',
      '/demo',
      '/'
    ]
  },
    /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://api.theflowai.com/api'
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
    extractCSS: true,
    extend(config, ctx) {}
  }
}
