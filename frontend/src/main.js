import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'

import App from './App.vue'
import Home from './components/Home.vue'
import  CuentasEspejo  from "./components/CuentasEspejo.vue";



const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name:'home', component: Home },
    { path: '/cuentas-espejo', name:'cuentas-espejo', component: CuentasEspejo}
  ]
})

app.use(router)
app.mount('#app')

