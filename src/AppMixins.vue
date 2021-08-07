<template>
  <div class="container">
    <div class="card">
      <button
        class="btn primary"
        @click="toggleNotification()">
        {{showNotification ? 'Hide' : 'Show'}} notification
      </button>
    </div>
    <Notification
      v-if="showNotification"
      title="Attention!"
      text="This is  an important message"
      type="warning"
      closable="true"
      @close="showNotification = false"
    />
    <Block />
  </div>
  
</template>

<script>
import Notification from './components/Notification.vue'
import Block from './components/Block.vue'
import notificationMixin from '@/notificationMixin'

export default {
  name: 'App',
  mixins: [notificationMixin],
  components: { 
    Notification,
    Block
  }
}
</script>

<style>

</style>
