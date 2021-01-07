export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'sample-nuxt-auth',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/bulma',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  auth: {
    strategies: {
      auth0: {
        domain: 'XXXXX', // Auth0 App Domain
        client_id: 'XXXXX', // Auth0 App Client ID
      },
    },
    redirect: {
      login: '/login', // 未ログイン時のリダイレクト先
      logout: '/logout', // ログアウト処理を実行した直後のリダイレクト先
      callback: '/callback', // コールバックURL
      home: '/mypage', // ログイン後に遷移するページ
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
  },

  /* 全ページに認証をかける場合
  router: {
    middleware: 'auth'
  },
  */
}
