import axios from 'axios';



const handleError = fn => (...params) => fn(...params).catch((err) => console.error('Error', err))

const ajaxWrapper = async (url, method = "GET", body = {}) => {
    const headers = {
      "Content-Type": "application/json",
    };

    const result = await axios({
      url,
      method,
      headers,
      [method === "POST" ? "data" : "params"]: body,
    });
    return result;
};

const safeAjaxWrapper = handleError(ajaxWrapper)



export default safeAjaxWrapper;

