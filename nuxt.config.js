<<<<<<< HEAD
const TerserPlugin = require('terser-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
=======
>>>>>>> d00661464dfa7f46b6526dbb997b7448befc94e4
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en',
      dir: 'ltr'
    },
<<<<<<< HEAD
    title:
      'Siey AI | Machine Intelligence Platform for Developers and Researchers',
=======
    title: 'Machine Intelligence Platform | Flow',
>>>>>>> d00661464dfa7f46b6526dbb997b7448befc94e4
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'initial-scale=1, minimum-scale=1, width=device-width'
      },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      {
        hid: 'description',
        name: 'description',
        content: `Small to large businesses can very easily leverage the capabilities of precise machine learning model interfaces in their workflow.`
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: `flow, flowai, theflowai, ml, ai, ai api, face detection, facial landmark, machine learning, artificial intelligence, the flow ai, the flow ai, ai ludhiana, ai india, ai punjab, ml ludhiana, ml india, ml punjab, the flow ai india, the flow ai ludhiana, FLOW, FLOWAI, THEFLOWAI, flow ml, flow artificial intelligence`
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: `#2d2d2d`
      },
      {
        hid: 'author',
        name: 'author',
        content: `co-authored by Sanjampreet Singh, Karamveer Singh`
      },
      {
        name: 'robots',
        content: 'INDEX,FOLLOW'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favico.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css',
        async: true,
        defer: true
      },
      {
        rel: 'manifest',
        href: 'https://theflowai.com/manifest.webmanifest'
      },
      {
        rel: 'shortcut icon',
        href: '/favico.ico'
      }
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
  css: ['~/assets/css/main'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/buefy', ssr: false },
    { src: '~/plugins/auth', ssr: false },
    { src: '~/plugins/common', ssr: false },
    { src: '~/plugins/VueCodeHighlight', ssr: false },
    { src: '~/plugins/repository' },
    { src: '~/plugins/ga.js', ssr: false },
    { src: '~/plugins/darkmode.js', ssr: false }
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
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://api.theflowai.com/api'
  },
  auth: {
    // plugins: ['~/plugins/auth.js'],
    redirect: {
      callback: '/callback/',
      login: '/login'
    },
    cookie: {
      prefix: 'auth.',
      options: {
        maxAge: 43200
      }
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'authenticate/',
            method: 'post',
            propertyName: 'data.token'
          },
          user: {
            url: 'user-details',
            method: 'get',
            propertyName: 'data.user'
          },
          logout: false
        }
      },
      github: {
        client_id: 'e25d91836a3e77079400',
        client_secret: 'c033f10268125ab62046b0cf8aface986ac64984'
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
<<<<<<< HEAD
    optimization: {
      minimize: true,
      minimizer: [
       new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        sourceMap: true,
        extractComments: false,
        parallel: true,
       }),
       new OptimizeCssAssetsPlugin({})
      ],
      splitChunks: {
       cacheGroups: {
        styles: {
         name: 'styles',
         test: /\.(vue)$/,
         chunks: 'all',
         enforce: true
=======
    terser: {
      parallel: true,
      cache: true,
      sourceMap: false,
      extractComments: {
        filename: 'LICENSES'
      },
      terserOptions: {
        output: {
          comments: /^\**!|@preserve|@license|@cc_on/
>>>>>>> d00661464dfa7f46b6526dbb997b7448befc94e4
        }
       }
      }
    },
    extend(config, ctx) {
      // Run on save
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map',
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
