import {createStore} from "vuex";

import auth from '../store/modules/auth.module';
import reset from '../store/modules/reset.module';

const store = createStore({
    modules: {
        auth: auth,
        reset: reset,
    },
});

export default store;