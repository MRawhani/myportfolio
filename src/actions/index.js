import {
  FETCH_PORTFOLIOS,
  FETCH_PORTFOLIOS_FAIL,
  FETCH_PORTFOLIOS_INIT,
  FETCH_TOOLS,
  FETCH_TOOLS_FAIL,
  FETCH_TOOLS_INIT,
  FETCH_BLOGS,
  FETCH_BLOGS_FAIL,
  FETCH_BLOGS_INIT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  FETCH_BLOG_By_ID,
  FETCH_BLOG_By_ID_INIT,
  
  RESET_ERRORS
} from "./types";
import axios from "axios";
import authService from "../services/auth-service";

const apiUrl = process.env.REACT_APP_API_URL;
//"https://mrawhani.herokuapp.com/api/v1"
//"http://localhost:3001/api/v1"


export const getPortfolios = () => dispatch => {
  dispatch({ type: FETCH_PORTFOLIOS_INIT });

  axios
    .get(`${apiUrl}/portfolio/getPortfolios`)
    .then(portfolios => {
      dispatch({ type: FETCH_PORTFOLIOS, payload: portfolios.data });
    })
    .catch(err => {
      dispatch({
        type: FETCH_PORTFOLIOS_FAIL,
        payload: err.response
          ? err.response.data.errors
          : [{ detail: err.message }]
      });
    });
};

export const getTools = () => dispatch => {
  dispatch({ type: FETCH_TOOLS_INIT });

  axios
    .get(`${apiUrl}/tools/getTools`)
    .then(Tools => {
      dispatch({ type: FETCH_TOOLS, payload: Tools.data });
    })
    .catch(err => {
      dispatch({
        type: FETCH_TOOLS_FAIL,
        payload: err.response
          ? err.response.data.errors
          : [{ detail: err.message }]
      });
    });
};

export const register = userData => {
  return axios.post(`${apiUrl}/users/register`, userData).then(
    res => {
      return res.data;
    },
    err => {
      return Promise.reject(err.response.data.errors);
    }
  );
};
export const getBlogs = limit => dispatch => {
  dispatch({ type: FETCH_BLOGS_INIT });

  axios
    .get(`${apiUrl}/blogs/getBlogs?limit=${limit}`)
    .then(blogs => {
      dispatch({ type: FETCH_BLOGS, payload: blogs.data });
    })
    .catch(err => {
      dispatch({
        type: FETCH_BLOGS_FAIL,
        payload: err.response
          ? err.response.data.errors
          : [{ detail: err.message }]
      });
    });
};
export const getBlogById = id => dispatch => {
  dispatch({ type: FETCH_BLOG_By_ID_INIT });

  axios
    .get(`${apiUrl}/blogs/getBlogById/${id}`)
    .then(blogs => {
      dispatch({ type: FETCH_BLOG_By_ID, payload: blogs.data });
    })
    .catch(err => {
      dispatch({
        type: FETCH_BLOGS_FAIL,
        payload: err.response
          ? err.response.data.errors
          : [{ detail: err.message }]
      });
    });
};
const loginSuccess = () => {
  const username = authService.getUsername();
  return {
    type: LOGIN_SUCCESS,
    payload: username
  };
};
const loginfailure = errors => {
  return {
    type: LOGIN_FAILURE,
    payload: errors
  };
};
export const checkAuth = () => dispatch => {
  if (authService.isAuthenticated()) {
    dispatch(loginSuccess());
  }
};
// another way of setting thunk's dispatch
export const loginAction = userData => {
  return dispatch => {
    axios
      .post(`${apiUrl}/users/auth`, userData)
      .then(res => res.data)
      .then(token => {
        authService.saveToken(token);
        dispatch(loginSuccess());
      })
      .catch(err => {
        dispatch(loginfailure(err.response.data.errors));
      });
  };
};

export const logout = () => {
  authService.removeToken();
  return {
    type: LOGOUT
  };
};

export const resetErrors = () => {
  return { type: RESET_ERRORS };
};
