import axios from "axios";

const instance = axios.create({
   baseURL: 'https://party-joiner.herokuapp.com',
   headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
   },
   timeout: 10000,
});

export default instance;