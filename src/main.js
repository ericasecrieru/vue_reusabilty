import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'
import localizationPlugin from './localizationPlugin'

const en = {
    app: {
        title: 'Custom plugins'
    }
}

const ru = {
    app: {
        title: 'Пользовательские плагины'
    }
}

const app = createApp(App)
app.use(localizationPlugin, {en, ru})
app.mount('#app')
