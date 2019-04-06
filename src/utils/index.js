import axios from "axios";

const config = {
  fetchUrl: "https://qr8torsserver.herokuapp.com/api/v1"
};

const callPlainApi = (url, data, method) => {
  return new Promise(function(resolve, reject) {
    if (method === "PUT") {
      axios
        .put(`${config.fetchUrl}${url}`, data)
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    }
    if (method === "POST") {
      axios
        .post(`${config.fetchUrl}${url}`, data)
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    } else {
      axios
        .get(`${config.fetchUrl}${url}`)
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    }
  });
};

const callSecuredApi = (url, data, method, token, callback) => {
  var axiosOptions = {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    }
  };
  return new Promise(function(resolve, reject) {
    if (method === "PUT") {
      axiosOptions.method = "PUT";
      axiosOptions.body = data;
      axios
        .put(`${config.fetchUrl}${url}`, data, {
          headers: axiosOptions.headers
        })
        .then(response => {
          if (callback) {
            callback();
          }
          resolve(response.data);
        })
        .catch(error => {
          if (callback) {
            callback(error);
          }
          reject(error);
        });
    } else if (method === "POST") {
      axios
        .post(`${config.fetchUrl}${url}`, data, {
          headers: axiosOptions.headers
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          if (err.response.data) {
            reject(err.response.data);
          }
          reject(err.response.status);
        });
    } else if (method === "PATCH") {
      axios
        .patch(`${config.fetchUrl}${url}`, data, {
          headers: axiosOptions.headers
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          if (err.response.data) {
            reject(err.response.data);
          }
          reject(err.response.status);
        });
    } else if (method === "DELETE") {
      axios
        .delete(`${config.fetchUrl}${url}`, {
          headers: axiosOptions.headers
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          if (err.response.data) {
            reject(err.response.data);
          }
          reject(err.response.status);
        });
    } else {
      axios
        .get(`${config.fetchUrl}${url}`, {
          headers: axiosOptions.headers
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    }
  });
};

export const callApi = (url, data, method, token, callback) => {
  if (token) {
    console.log("Calling Secured Axios API... " + url);
    return callSecuredApi(url, data, method, token, callback);
  }
  console.log("Calling Axios API... " + url);
  return callPlainApi(url, data, method, callback);
};

export const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
