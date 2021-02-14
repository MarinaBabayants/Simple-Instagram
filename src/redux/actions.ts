import {
  FETCH_POST,
  FETCH_POST_FAIL,
  FETCH_POST_SUCCESS,
  POSTS_FETCH_ALL,
  POSTS_FETCH_ALL_FAIL,
  POSTS_FETCH_ALL_SUCCESS,
  PostType,
  ThunkType,
} from './types';
import { instance } from '../API/instagramAPI';

const LONG_LIVED_ACCESS_TOKEN =
  'IGQVJXV0ZAYZAkdfaEJuaTRjSXJiNzFfRmtpY2JiV3lxaFJLd2NnczM1ZA3hHOTc4QnV4cUJ1ZAW1jd3ZA3RUI2ZAHV2NlRJaHZAOVUVualZACbWV2ZA2dsSGoyTnY0NHdfZAVFsXzRSV2k5eUhsd1VsakdOaHhkcQZDZD';

type PostsResponse = {
  data: Array<PostType>;
};

type PostResponse = PostType;

const params = {
  params: {
    access_token: LONG_LIVED_ACCESS_TOKEN,
    fields: 'id,caption,media_type,media_url,username,permalink,timestamp',
  },
};

export const getPosts = (): ThunkType => (dispatch) => {
  dispatch({ type: POSTS_FETCH_ALL });

  instance
    .get<PostsResponse>('me/media', params)
    .then(({ data }) => {
      dispatch({
        type: POSTS_FETCH_ALL_SUCCESS,
        payload: data.data,
      });
    })
    .catch(() => {
      dispatch({
        type: POSTS_FETCH_ALL_FAIL,
        message: 'Fetching was failed.',
      });
    });
};

export const getPost = (id: string): ThunkType => (dispatch) => {
  dispatch({ type: FETCH_POST });

  instance
    .get<PostResponse>(`${id}`, params)
    .then(({ data }) => {
      dispatch({
        type: FETCH_POST_SUCCESS,
        payload: data,
      });
    })
    .catch(() => {
      dispatch({
        type: FETCH_POST_FAIL,
        message: 'Fetching was failed.',
      });
    });
};
