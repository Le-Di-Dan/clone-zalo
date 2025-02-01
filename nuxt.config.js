export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "clone-zalo",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js",
        type: "module",
      },
      {
        src: "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js",
        nomodule: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["element-ui/lib/theme-chalk/index.css", "~/assets/styles/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/element-ui",
    "~/plugins/axios",
    {
      src: "~/plugins/vuex-persist.js",
      ssr: false,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs/i18n",
  ],
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BASE_URL,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "http://localhost:3000",
  },
  auth: {
    redirect: {
      login: "/auth/login/",
      logout: "/auth/login/",
      callback: false,
      home: "/",
    },
    strategies: {
      local: {
        scheme: "refresh",
        user: {
          property: "data.user",
        },
        token: {
          property: "data.access_token",
          global: true,
          maxAge: 30,
        },
        refreshToken: {
          property: "data.refresh_token",
          data: "refresh_token",
          maxAge: 0.5 * 60 * 60,
        },
        endpoints: {
          login: { url: "/auth/login", method: "post" },
          logout: { url: "/auth/logout", method: "post" },
          user: { url: "/auth/me", method: "get" },
          refresh: {
            url: "/auth/renew",
            method: "post",
          },
        },
      },
    },
  },

  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          greeting: "Hello world!aaaaa",
        },
        es: {
          greeting: "¡Hola mundo!",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
  router: {
    base: "/",
    trailingSlash: true,
    middleware: ["auth" /* "authen" */],
  },
  loading: "~/components/loading.vue",
};
