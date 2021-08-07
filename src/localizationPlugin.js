export default {
    install(app, options) {
        var currentLanguage = 'en'
        const changeLang = lang => {
            currentLanguage = lang
        }
        app.provide('translate', changeLang)
        app.config.globalProperties.$localization = localizationKey => {
            //'app.title' => localizationKey.split('.') => ['app', 'title']
            return localizationKey.split('.').reduce((words, key) => {
                return words[key] || 'key is unknown'
            }, options[currentLanguage])
        }
    }
}