// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

import { createApp } from 'vue'
import { Quasar,Notify } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
import router from './router'
import pinia from './store'

import './service/interceptors/index'

const myApp = createApp(App)

myApp.use(pinia)

myApp.use(Quasar, {
  plugins: {
    Notify
  }, // import Quasar plugins and add here
  config:{
    notify: { /* look at QuasarConfOptions from the API card */ }
  }
})
myApp.use(router)
myApp.mount('#app')
     



// createApp(App).mount('#app')
