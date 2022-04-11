import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-back-end-1d037.cloudfunctions.net/api',
});

export default instance;
