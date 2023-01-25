import axios from "axios";

window.URL = window.URL || window.webkitURL;

axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

axios.interceptors.response.use(
  function (response) {
    if (!response.hasOwnProperty("data")) return response;
    console.groupEnd();
    return response.data;
  },
  function (error) {
    console.group("API Errors");
    console.log("Error Status Code: ", error.status);
  },
);
