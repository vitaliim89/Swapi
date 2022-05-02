import axios from "axios";
import Constants from './Constants';

async function get(url) {
  try {
    const result = await axios.get(Constants.baseUrl + url);

    if (result.data) {
      return {
        success: true,
        data: result.data
      };
    } else {
      return {
        success: false,
        err: result.statusText
      };
    }
  } catch (err) {
    return {
      success: false,
      err: 'Unknown Error'
    };
  }
}

async function post(url, params) {
  try {
    const result = await axios.post(Constants.baseUrl + url, params);

    if (result.data) {
      return {
        success: true,
        data: result.data
      };
    } else {
      return {
        success: false,
        err: result.statusText
      };
    }
  } catch (err) {
    return {
      success: false,
      err: 'Unknown Error'
    };
  }
}

const HttpHelper = {
  get,
  post
};
export default HttpHelper;
//# sourceMappingURL=HttpHelper.js.map