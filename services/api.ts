// apiClient.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3333',
});

export { apiClient };
