// apiClient.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3333',
});
const apiClientPython = axios.create({
  baseURL: 'http://localhost:8001',
});
const apiClientPythonEstacionamento = axios.create({
  baseURL: 'http://localhost:8000',
});

export { apiClient, apiClientPythonEstacionamento, apiClientPython };
