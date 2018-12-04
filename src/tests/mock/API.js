import * as entryData from './entryData';

export class CustomAPIError extends Error {
  constructor(message, status = 404, ...params) {
    super(message, ...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomAPIError);
    }
    this.response = {
      status,
      data: {
        error: message,
        message,
      },
    };
  }
}
export const routes = {
  get: {
    '/entries': () => entryData.entries,
  },
  put: {
    '/entries/1': (payload) => {
      if (payload.title && payload.content) return entryData.updateEntryDetail;
      throw new CustomAPIError('All fields are required', 400);
    },
  },
  post: {
    '/entries': (payload) => {
      if (payload.title && payload.content) return entryData.postEntry;
      throw new CustomAPIError('All fields are required', 400);
    },
  },
  delete: {
    '/entries/1': () => entryData.deleteEntry,
  },
};

const apiCall = (type, route, payload) => new Promise((resolve, reject) => {
  if (routes[type][route]) resolve(routes[type][route](payload));
  reject(new CustomAPIError('Invalid request, Route does not exist'));
});

export default {
  api: {
    get(route) {
      return apiCall('get', route);
    },
    put(route, payload) {
      return apiCall('put', route, payload);
    },
    post(route, payload) {
      return apiCall('post', route, payload);
    },
    delete(route) {
      return apiCall('delete', route);
    },
  },
  openRoutes: {
  },
};
