import auth from '../../api/auth.requests';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGOUT
} from "../actionTypes";

const state = () => ({
    user: {},

    isAuthenticated: false,
    loading: false,

    error: '',
});

const getters = {
    user: (state) => {
        return state.user;
    },

    isAuthenticated: (state) => {
        return state.isAuthenticated;
    },

    loading: (state) => {
        return state.loading;
    },
};

const actions = {
    async login({commit}, data) {
        commit(LOGIN_REQUEST);
        try {
            const res = await auth.login(data);
            commit(LOGIN_SUCCESS, res);
        } catch (e) {
            commit(LOGIN_ERROR, e.message);
            throw e;
        }
    },

    async register({commit}, data) {
        commit(REGISTER_REQUEST);
        try {
            const res = await auth.register(data);
            commit(REGISTER_SUCCESS, res);
        } catch (e) {
            commit(REGISTER_ERROR, e.message);
            throw e;
        }
    },

    logout({commit}) {
        commit(LOGOUT);
    }
};

const mutations = {
    LOGIN_REQUEST(state) {
      state.loading = true;
    },
    LOGIN_SUCCESS(state, {data}) {
        state.user = data;
        state.isAuthenticated = true;
        state.loading = false;

        state.error = '';
    },
    LOGIN_ERROR(state, {error}) {
        state.user = {};
        state.isAuthenticated = false;
        state.loading = false;

        state.error = error;
    },

    REGISTER_REQUEST(state) {
        state.loading = true;
    },
    REGISTER_SUCCESS(state, {data}) {
        state.user = data;
        state.isAuthenticated = true;
        state.loading = false;

        state.error = '';
    },
    REGISTER_ERROR(state, {error}) {
        state.user = {};
        state.isAuthenticated = false;
        state.loading = false;

        state.error = '';
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}