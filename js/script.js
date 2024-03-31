const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Messaggio',
            url: 'https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/Vue-Blog-Cover-2.png',
        };
    }
}).mount('#app');