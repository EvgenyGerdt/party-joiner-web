import instance from '../config/axios.config';

const login = async (data) => {
    return (await instance.post('/api/auth/login', {
        username: data.username,
        password: data.password,
    })).data;
};

const register = async (data) => {
    return (await instance.post('/api/auth/register', {
        email: data.email,
        username: data.username,
        password: data.password,
        secretWord: data.secretWord,
    })).data;
};

export default {
    login,
    register
};