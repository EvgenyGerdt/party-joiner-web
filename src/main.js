import { createApp } from 'vue'
import App from './App.vue'

import {library} from "@fortawesome/fontawesome-svg-core";

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

import router from "./router/routes";
import store from './store/index';

library.add(faSpinner);

createApp(App)
    .component('svg-icon', FontAwesomeIcon)
    .use(store)
    .use(router)
    .mount('#app')
