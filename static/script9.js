const vueapp9 = Vue.createApp({
    data() {
        return {
            provpass: false,
            refer1: `/profile/${localStorage.getItem('forlogin')}`,
            refer2: `/upload/${localStorage.getItem('forlogin')}`
        }
    },
    methods: {
        smenatexta() {
            document.getElementById('spaner').innerText = document.getElementById('filer').value.split('\u002F').pop();
        }
    }
});
const vm9 = vueapp9.mount('#vueapp9');


document.forms['addIzobrForm'].addEventListener('submit', e => {
    const opisanie = document.getElementById('opisanie').value;
    const filer = document.getElementById('filer').value;
    if (!filer || opisanie === '') {
        e.preventDefault();
        vm9.provpass = true;
        document.getElementById('vnim').innerText = 'Заполните все поля!';
    }
})