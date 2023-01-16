export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tingkatkan Penjualan dan Buat Bisnismu Makin Terlihat Profesional | ANDILPRO',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/dist/img/share-icon.png' },
      // Iconbar
      { rel: 'icon', type: 'image/x-icon', href: '/dist/img/iconbar.png' },
      { rel: 'apple-touch-icon1', href: '/dist/img/apple-touch-icon.png' },
      // Google Fonts
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i' },
      // Vendor CSS Files
      { rel: 'stylesheet', href: '/dist/vendor/aos/aos.css' },
      { rel: 'stylesheet', href: '/dist/vendor/bootstrap/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/dist/vendor/boxicons/css/boxicons.min.css' },
      { rel: 'stylesheet', href: '/dist/vendor/glightbox/css/glightbox.min.css' },
      { rel: 'stylesheet', href: '/dist/vendor/remixicon/remixicon.css' },
      { rel: 'stylesheet', href: '/dist/vendor/swiper/swiper-bundle.min.css' },

      //Template Main CSS File 
      { rel: 'stylesheet', href: '/dist/css/style.css' },
    ],
    script:  [
      // Vendor JS Files
      { src: '/dist/vendor/purecounter/purecounter_vanilla.js'},
      { src: '/dist/vendor/aos/aos.js'},
      { src: '/dist/vendor/bootstrap/js/bootstrap.bundle.min.js'},
      { src: '/dist/vendor/glightbox/js/glightbox.min.js'},
      { src: '/dist/vendor/isotope-layout/isotope.pkgd.min.js'},
      { src: '/dist/vendor/swiper/swiper-bundle.min.js'},
      { src: '/dist/vendor/php-email-form/validate.js'},
      // Template Main JS File
      { src: '/dist/js/main.js'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
