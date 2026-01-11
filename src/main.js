import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.mount('#app')

// Initialize AOS after mount
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 50
})
