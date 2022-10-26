import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop',
  timeout: 30_000,
});

instance.interceptors.response.use(
  response => response,

  error => {
    if (error?.response?.data?.message != null) {
      return Promise.reject(new Error(error.response.data.message));
    } else {
      return Promise.reject(error);
    }
  }
);

export const post = ({ url, data, headers }) => {
  return instance.post(url, data, { headers });
};

export const get = ({ url, data, headers }) => {
  const qs = new URLSearchParams(data).toString();
  if (qs.length > 0) {
    url = `${url}?${qs}`;
  }

  return instance.get(url, { headers });
};

export const put = ({ url, data, headers }) => {
  return instance.put(url, data, { headers });
};

export const del = ({ url, headers }) => {
  return instance.delete(url, { headers });
};
