import instance from "../config/axios.config";

const loadPartyList = async (data) => {
    return (await instance.post('/api/party/get_party_list', {
        id: data.id,
    })).data;
};

const createParty = async (data) => {
    return (await instance.post('/api/party/create_party', {
        id: data.id,
        name: data.name,
        willHappenAt: data.willHappenAt,
        location: data.location,
        description: data.description,
        creatorId: data.creatorId,
        partyStatus: data.partyStatus,
    })).data;
};

const joinParty = async (data) => {
    return (await instance.post('/api/party/join_party', {
        userId: data.userId,
        partyId: data.partyId,
    })).data;
};

const closeParty = async (data) => {
    return (await instance.post('/api/party/close_party', {
        partyId: data.partyId,
    })).data;
};

export default {
    loadPartyList,
    createParty,
    joinParty,
    closeParty
};