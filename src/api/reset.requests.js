import instance from "../config/axios.config";

const sendCode = async (data) => {
    return (await instance.post('/api/auth/send_code', {
        to: data.email,
        username: data.username,
    })).data;
};

const checkCode = async (data) => {
    return (await instance.post('/api/auth/check_code', {
        code: data.code,
    })).data;
};

const changePassword = async (data) => {
    return (await instance.post('/api/auth/reset_password', {
        email: data.email,
        password: data.password,
    })).data;
};

export default {
    sendCode,
    checkCode,
    changePassword
};