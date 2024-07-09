import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL;

axios.interceptors.request.use(
  function (config) {
    config.headers.token = localStorage.getItem('token');
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const getRequest = (url, params, config = {}) =>
  axios
    .get(baseUrl + url, { ...config, params })
    .then((response) => {
      if (response?.data?.status === 400) {
        handleError(response);
      } else {
        console.log(response);
        return response.data;
      }
    })
    .catch((error) => handleError(error));

export const postRequest = async (url, payload, config = {}, params) =>
  await axios
    .post(baseUrl + url, payload, { ...config, params })
    .then((response) => {
      const { status } = response.data;
      if (status === 400) {
        handleError(response);
      } else {
        return response;
      }
    })
    .catch((error) => {
      return handleError(error);
    });

export const putRequest = (url, payload, config = {}, params) =>
  axios
    .put(baseUrl + url, payload, { ...config, params })
    .then((response) => {
      if (response.data.status === 200) {
        return response;
      } else {
        handleError(response);
      }
    })
    .catch((error) => {
      return handleError(error);
    });

export const deleteRequest = (url, payload, config = {}, params) =>
  axios
    .delete(baseUrl + url, { data: payload }, { ...config, params })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return handleError(error);
    });

export const handleError = (error) => {
  console.log(error.response);
  if (
    error?.response &&
    (error.response.status === 401 || error.response.status === 400)
  ) {
    localStorage.removeItem('token');
    window.location.reload();
  }
  throw error;
};
