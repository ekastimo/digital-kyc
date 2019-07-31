import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
import {renderDecimal, renderInteger} from '@/utils/numberHelpers';

Vue.config.productionTip = false;
Vue.filter('renderDecimal', renderDecimal);
Vue.filter('renderInteger', renderInteger);
new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App)
}).$mount('#app');
