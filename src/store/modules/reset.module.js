import reset from '../../api/reset.requests';
import {
    SEND_CODE_REQUEST,
    SEND_CODE_SUCCESS,
    SEND_CODE_ERROR,
    CHECK_CODE_REQUEST,
    CHECK_CODE_SUCCESS,
    CHECK_CODE_ERROR,
    CHANGE_PASSWORD_REQUEST,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_ERROR
} from "../actionTypes";

const state = () => ({
    isSent: false,
    isChecked: false,
    isChanged: false,

    loading: false,

    error: '',
});

const getters = {
    isSent: (state) => {
        return state.isSent;
    },

    isChecked: (state) => {
        return state.isChecked;
    },

    isChanged: (state) => {
        return state.isChanged;
    },

    loading: (state) => {
        return state.loading;
    }
};

const actions = {
    async sendCode({commit}, data) {
        commit(SEND_CODE_REQUEST);
        try {
            await reset.sendCode(data);
            commit(SEND_CODE_SUCCESS);
        } catch (e) {
            commit(SEND_CODE_ERROR, e.message);
            throw e;
        }
    },

    async checkCode({commit}, data) {
        commit(CHECK_CODE_REQUEST);
        try {
            await reset.checkCode(data);
            commit(CHECK_CODE_SUCCESS);
        } catch (e) {
            commit(CHECK_CODE_ERROR, e.message);
            throw e;
        }
    },

    async changePassword({commit}, data) {
        commit(CHANGE_PASSWORD_REQUEST);
        try {
            await reset.changePassword(data);
            commit(CHANGE_PASSWORD_SUCCESS);
        } catch (e) {
            commit(CHANGE_PASSWORD_ERROR, e.message);
            throw e;
        }
    },
};

const mutations = {
    SEND_CODE_REQUEST(state) {
      state.loading = true;
    },
    SEND_CODE_SUCCESS(state) {
      state.loading = false;
      state.isSent = true;
    },
    SEND_CODE_ERROR(state) {
        state.loading = false;
        state.isSent = false;
    },

    CHECK_CODE_REQUEST(state) {
        state.loading = true;
    },
    CHECK_CODE_SUCCESS(state) {
        state.loading = false;
        state.isChecked = true;
    },
    CHECK_CODE_ERROR(state) {
        state.loading = false;
        state.isChecked = false;
    },

    CHANGE_PASSWORD_REQUEST(state) {
        state.loading = true;
    },
    CHANGE_PASSWORD_SUCCESS(state) {
        state.loading = false;
        state.isChanged = true;
    },
    CHANGE_PASSWORD_ERROR(state) {
        state.loading = false;
        state.isChanged = false;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};