import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export type PostType = {
  id: string;
  caption?: string;
  media_type: string;
  media_url: string;
  username: string;
  permalink: string;
  timestamp: string;
};

type State = {
  posts: Array<PostType>;
  post: undefined | PostType;
  isFetching: boolean;
  error: string;
};

export const POSTS_FETCH_ALL = 'POSTS-FETCH-ALL';
export const POSTS_FETCH_ALL_SUCCESS = 'POSTS-FETCH-ALL-SUCCESS';
export const POSTS_FETCH_ALL_FAIL = 'POSTS-FETCH-ALL-FAIL';

export const FETCH_POST = 'FETCH-POST';
export const FETCH_POST_SUCCESS = 'FETCH-POST-SUCCESS';
export const FETCH_POST_FAIL = 'FETCH-POST-FAIL';

interface postsFetchAll {
  type: typeof POSTS_FETCH_ALL;
}

interface postsFetchAllSuccess {
  type: typeof POSTS_FETCH_ALL_SUCCESS;
  payload: Array<PostType>;
}

interface postsFetchAllFail {
  type: typeof POSTS_FETCH_ALL_FAIL;
  message: string;
}

interface fetchPost {
  type: typeof FETCH_POST;
}

interface fetchPostSuccess {
  type: typeof FETCH_POST_SUCCESS;
  payload: PostType;
}

interface fetchPostFail {
  type: typeof FETCH_POST_FAIL;
  message: string;
}

type Action =
  | postsFetchAll
  | postsFetchAllSuccess
  | postsFetchAllFail
  | fetchPost
  | fetchPostSuccess
  | fetchPostFail;

type ActionReturnType = void;
type ExtraThunkArgument = void;

type ThunkType = ThunkAction<ActionReturnType, State, ExtraThunkArgument, Action>;
type DispatchType = ThunkDispatch<State, void, Action>;

export type { State, Action, ThunkType, DispatchType };
