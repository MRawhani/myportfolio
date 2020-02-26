import {
  FETCH_BLOGS,
  FETCH_BLOGS_FAIL,
  FETCH_BLOGS_INIT,
  FETCH_BLOG_By_ID,
  FETCH_BLOG_By_ID_INIT
} from "../actions/types";
let INITIAL_STATE = {
  blogs: {
    data: [],
    errors: []
  },
  blog: {
  }
};
export const blogsReducer = (state = INITIAL_STATE.blogs, action) => {
  switch (action.type) {
    case FETCH_BLOGS_INIT:
      return { ...state, data: [], errors: [] };
    case FETCH_BLOGS:
      return { ...state, data: action.payload, errors: [] };
    case FETCH_BLOGS_FAIL:
      return { ...state, errors: action.payload };

    default:
      return state;
  }
};
export const blogReducer = (state = INITIAL_STATE.blog, action) => {
  switch (action.type) {
    case FETCH_BLOG_By_ID_INIT:
      return { ...state, data: {} };
    case FETCH_BLOG_By_ID:
      return { ...state, data: action.payload };
   
    default:
      return state;
  }
};