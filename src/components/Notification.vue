<template>
    <div class="notification" :class="type">
        <p class="notification-title">{{title}}</p>
        <p>{{text}}</p>
        <button 
            v-if="closable"
            class="btn"
            :class="type"
            @click="$emit('close')"
        >Close</button>
    </div>
</template>

<script>
export default {
    name: 'Notification',
    props: {
        text: String,
        title: String,
        closable: {
            type: Boolean,
            required: false,
            default: false
        },
        type: {
            type: String,
            required: false,
            default: 'primary',
            validator (value) {
                return ['primary', 'danger', 'warning'].includes(value)
            }
        }
    }
}
</script>
