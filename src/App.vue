<template>
  <div class="container">
    <div class="card">
      <h2>{{$localization('app.title')}}</h2>
      <button class="btn" @click="changeLang()">{{$localization('app.btntitle')}}</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    inject: ['translate'],
    data () {
      return {
        languages: ['en', 'ru', 'ro'],
        currentLanguage: 'en'
      }
    },
    methods: {
      changeLang() {
        let currentIndex = this.languages.indexOf(this.currentLanguage)
        let nextIndex = (currentIndex + 1) % this.languages.length
        this.currentLanguage = this.languages[nextIndex]
        this.translate(this.currentLanguage)
        this.$forceUpdate()
      }
    }
  }
</script>