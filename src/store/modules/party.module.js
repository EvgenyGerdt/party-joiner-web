import party from '../../api/party.requests';
import {
    LOAD_PARTY_LIST_REQUEST,
    LOAD_PARTY_LIST_SUCCESS,
    LOAD_PARTY_LIST_ERROR,
    CREATE_PARTY_REQUEST,
    CREATE_PARTY_SUCCESS,
    CREATE_PARTY_ERROR,
    JOIN_PARTY_REQUEST,
    JOIN_PARTY_SUCCESS,
    JOIN_PARTY_ERROR,
    CLOSE_PARTY_REQUEST,
    CLOSE_PARTY_SUCCESS,
    CLOSE_PARTY_ERROR,
} from "../actionTypes";

const state = () => ({
    partyList: [],

    loading: false,
});

const getters = {
    partyList: (state) => {
        return state.partyList;
    },

    closestParty: (state) => {
      return null;
    },
};

const actions = {
    async loadPartyList({commit}, data) {
        commit(LOAD_PARTY_LIST_REQUEST);
        try {
            const res = await party.loadPartyList(data);
            commit(LOAD_PARTY_LIST_SUCCESS, res);
        } catch (e) {
            commit(LOAD_PARTY_LIST_ERROR, e.message);
            throw e;
        }
    },
    async createParty({commit}, data) {
        commit(CREATE_PARTY_REQUEST);
        try {
            const res = await party.createParty(data);
            commit(CREATE_PARTY_SUCCESS, res);
        } catch (e) {
            commit(CREATE_PARTY_ERROR, e.message);
            throw e;
        }
    },
    async joinParty({commit}, data) {
        commit(JOIN_PARTY_REQUEST);
        try {
            const res = await party.loadPartyList(data);
            commit(JOIN_PARTY_SUCCESS, res);
        } catch (e) {
            commit(JOIN_PARTY_ERROR, e.message);
            throw e;
        }
    },
    async closeParty({commit}, data) {
        commit(CLOSE_PARTY_REQUEST);
        try {
            const res = await party.loadPartyList(data);
            commit(CLOSE_PARTY_SUCCESS, res);
        } catch (e) {
            commit(CLOSE_PARTY_ERROR, e.message);
            throw e;
        }
    },
};

const mutations = {
    [LOAD_PARTY_LIST_REQUEST](state) {

    },
    [LOAD_PARTY_LIST_SUCCESS](state) {

    },
    [LOAD_PARTY_LIST_ERROR](state) {

    },

    [CREATE_PARTY_REQUEST](state) {

    },
    [CREATE_PARTY_SUCCESS](state) {

    },
    [CREATE_PARTY_ERROR](state) {

    },

    [JOIN_PARTY_REQUEST](state) {

    },
    [JOIN_PARTY_SUCCESS](state) {

    },
    [JOIN_PARTY_ERROR](state) {

    },

    [CLOSE_PARTY_REQUEST](state) {

    },
    [CLOSE_PARTY_SUCCESS](state) {

    },
    [CLOSE_PARTY_ERROR](state) {

    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
