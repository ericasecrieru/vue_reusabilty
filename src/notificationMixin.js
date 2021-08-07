export default {
    data () {
        return {
          showNotification: false
        }
    },
    methods: {
        toggleNotification() {
          this.showNotification = !this.showNotification
        }
    }
}