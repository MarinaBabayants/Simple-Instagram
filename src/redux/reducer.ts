import {
  Action,
  FETCH_POST,
  FETCH_POST_FAIL,
  FETCH_POST_SUCCESS,
  POSTS_FETCH_ALL,
  POSTS_FETCH_ALL_FAIL,
  POSTS_FETCH_ALL_SUCCESS,
  State,
} from './types';

const initialState: State = {
  posts: [],
  post: undefined,
  isFetching: false,
  error: '',
};

export function PostsReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case POSTS_FETCH_ALL:
    case FETCH_POST:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case POSTS_FETCH_ALL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: action.payload,
        error: '',
      };
    case POSTS_FETCH_ALL_FAIL:
    case FETCH_POST_FAIL:
      return {
        ...state,
        isFetching: false,
        error: 'Something went wrong.',
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
}
