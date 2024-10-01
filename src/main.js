import { createApp } from 'vue'
import App from './App.vue'
import directives from './directives.js';

const app = createApp(App);

// Creation of the directive within the application
for (let name in directives) {
  app.directive(name, directives[name]);
}

app.mount('#app');
