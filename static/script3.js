const vueapp3 = Vue.createApp({
    data() {
        return {

        }
    },
    methods: {
        ishod() {
            localStorage.removeItem('forlogin');
            localStorage.removeItem('checker');
            window.location.href = '/glav';
        }
    }
})
const vm3 = vueapp3.mount("#vueapp3");