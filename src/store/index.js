import {createStore} from "vuex";
import createPersistedState from 'vuex-persistedstate';

import auth from '../store/modules/auth.module';
import reset from '../store/modules/reset.module';

const store = createStore({
    plugins: [createPersistedState()],
    modules: {
        auth: auth,
        reset: reset,
    },
});

export default store;