import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Nucleo Icons
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';

import materialkit from './material-kit';

const app = createApp(App);

app.use(router);
app.use(materialkit);
app.mount('#app');
