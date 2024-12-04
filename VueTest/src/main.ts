
import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura'
import Button from 'primevue/button'
import { Carousel } from 'primevue';
import ToastService from 'primevue/toastservice';

const app = createApp(App)


app.use(PrimeVue)
app.use(ToastService);

app.component('Carousel', Carousel)

app.mount('#app')
