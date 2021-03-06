// src/main.ts
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from 'virtual:generated-pages'


// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  {
    routes,
  },
)