import * as React from 'react';
import './mainPage.css';
import { PostCard } from '../postCard/PostCard';
import { useEffect, useRef } from 'react';
import { getPosts } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, PostType, State } from '../../redux/types';
import { getRandomArbitrary, scrollFunction, scrollOnTop } from '../../utills/utills';
import { BsChevronDoubleUp } from 'react-icons/all';

export const MainPage = () => {
  const dispatch = useDispatch<DispatchType>();

  const fetchPosts = () => {
    dispatch(getPosts());
  };

  useEffect(fetchPosts, [dispatch]);

  const postsList = useSelector<State, Array<PostType>>((store) => {
    return store.posts;
  });

  const topButton = useRef<HTMLButtonElement | null>(null);

  window.onscroll = function () {
    scrollFunction(topButton);
  };

  return (
    <div className="d-flex flex-column align-items-center mb-3">
      <button ref={topButton} onClick={scrollOnTop} className="fixed-top topButton">
        <BsChevronDoubleUp />
      </button>
      {postsList.map((post) => {
        return (
          <PostCard
            key={post.id}
            userName={post.username}
            caption={post.caption}
            img={post.media_url}
            timestamp={post.timestamp}
            postId={post.id}
            likes={getRandomArbitrary(100, 250)}
          />
        );
      })}
    </div>
  );
};
