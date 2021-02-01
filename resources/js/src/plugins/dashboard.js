// vue-bootstrap
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import '../../../sass/app.scss';
export default {
    install(Vue) {
        Vue.use(BootstrapVue);
        Vue.use(IconsPlugin);
    }
};
