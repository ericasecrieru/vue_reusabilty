import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'
import localizationPlugin from './localizationPlugin'

const en = {
    app: {
        title: 'Custom plugins',
        btntitle: 'Switch to russian'
    }
}

const ru = {
    app: {
        title: 'Пользовательские плагины',
        btntitle: 'Изменить язык на румынский'
    }
}

const ro = {
    app: {
        title: 'Pluginuri personalizate',
        btntitle: 'Schimbă limba în engleză'
    }
}

const app = createApp(App)
app.use(localizationPlugin, {en, ru, ro})
app.mount('#app')