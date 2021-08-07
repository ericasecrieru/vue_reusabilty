<template>
  <div class="container">
    <div class="card">
      <h2>{{$localization('app.title')}}</h2>
      <button class="btn" @click="changeLang()">Change lang</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    inject: ['translate'],
    data () {
      return {
    
      }
    },
    methods: {
      changeLang() {
        this.translate('ru')
        this.$forceUpdate()
      }
    }
  }
</script>