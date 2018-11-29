import axios from 'axios';

const baseURL = `${process.env.REACT_APP_API_URL}/api/v1`;
class API {
  constructor() {
    this.api = axios.create({
      baseURL,
    });
  }

  api() {
    return this.api;
  }

  updateToken(token) {
    this.api.defaults.headers.common['x-access-token'] = token;
  }
}

const api = new API();

export default api;
