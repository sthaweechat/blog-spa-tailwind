require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import App from './src/Application';
// import DashboardPlugin from './src/plugins/dashboard';
// routes setup
import router from './src/routes/router';

//store
import store from './store'
// import * as mutations from './store/mutation-types'
// import * as actions from './store/action-types'

// plugin setup
// Vue.use(DashboardPlugin);

Vue.config.productionTip = false

// if (window.user) {
//   store.commit(mutations.LOGGED_USER, window.user)
// } else {
//   store.dispatch(actions.LOGGED_USER)
// }

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
