let interval

export default {
    mounted(element, binding) {
        element.style[binding.arg] = binding.value
        console.log(binding)
        if(binding.modifiers.blink) {
            let colorFlag = true
            interval = setInterval(() => {
                element.style[binding.arg] = colorFlag ? 'blue' : binding.value
                colorFlag = !colorFlag
            }, 1500)
        }
        element.style[binding.arg] = binding.value
    },
    updated(element, binding) {
        element.style[binding.arg] = binding.value
    },
    unmounted() {
        if(interval) {
            clearInterval(interval)
        }
    }
}