import { createApp } from 'vue'
import App from './App.vue'

const focusDirective = {
    mounted(el) {
        el.focus()
    }
};

const app = createApp(App);

// Creation of the directive within the application
app.directive('focus', focusDirective);

app.mount('#app');
