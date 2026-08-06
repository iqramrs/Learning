import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // import the router instance from the router/index.js file

const app = createApp(App) // create a new Vue application instance
app.use(router) // register the router instance with the Vue application

app.mount('#app')
