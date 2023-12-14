const vueapp5 = Vue.createApp({
    data() {
        return {
            provpass: false,
            refer: `/profile/${localStorage.getItem('forlogin')}`
        }
    },
    methods: {

    }
});
const vm5 = vueapp5.mount('#vueapp5');

document.forms['delForm'].addEventListener('submit', e => {
    e.preventDefault();
    const pass = document.getElementById('passer').value;
    if (pass === '') {
        vm4.provpass = true;
        document.getElementById('vnim').innerText = 'Заполните поле!';
    }
    else {
        async function ydalenie() {
            const resp = await fetch(`ydalenie/${localStorage.getItem('forlogin')}`, {method: "POST", body: pass});
            const respText = await resp.text();
            if(respText === 'No') {
                vm5.provpass = true;
                document.getElementById('vnim').innerText = 'Неверный пароль!';
            }
            else {
                localStorage.removeItem('forlogin');
                localStorage.removeItem('checker');
                window.location.href = resp.url;
            }
        }
        ydalenie();
    }
})