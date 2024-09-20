import { createApp } from 'vue'
import App from './App.vue'
// element plus
import ElementPlus from 'element-plus'
// element plus css
import 'element-plus/dist/index.css'

window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false
const app = createApp(App)

app.use(ElementPlus)

app.mount('#app')
