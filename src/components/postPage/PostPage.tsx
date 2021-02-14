import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, PostType, State } from '../../redux/types';
import { useParams } from 'react-router';
import { getPost } from '../../redux/actions';
import { useEffect } from 'react';
import { Button, Col, Row, Spinner } from 'reactstrap';
import { BsPeopleCircle } from 'react-icons/bs';
import { GiReturnArrow } from 'react-icons/all';
import { convertTimestampToDate } from '../../utills/utills';

export interface ParamTypes {
  id: string;
}

export const PostPage = () => {
  const { id } = useParams<ParamTypes>();

  const dispatch = useDispatch<DispatchType>();

  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  const post = useSelector<State, undefined | PostType>((store) => {
    return store.post;
  });

  if (!post) {
    return (
      <div className="mt-5 mx-auto">
        <Spinner color="secondary" />
      </div>
    );
  }

  const { media_url, caption, username, timestamp } = post;

  return (
    <Row className="mt-4">
      <Col className="w-75">
        <BsPeopleCircle className="mb-1" />
        <div className="h4 d-inline-block ml-2">{username}</div>
        <div className="shadow mb-4">
          <img src={media_url} className="img-thumbnail" alt="alternative url" />
        </div>
        <div className="mb-4">Публикация от {convertTimestampToDate(timestamp)}</div>
        <Button color="secondary" onClick={() => window.history.back()}>
          Back to feed
          <GiReturnArrow className="ml-3" />
        </Button>
      </Col>
      <Col className="w-25 ml-4">
        {caption ? (
          <div className="h5 mt-4 pl-2 pt-3 pb-3 rounded border text-left bg-light shadow">
            {username}:<span className="ml-4">{caption}</span>
          </div>
        ) : null}
      </Col>
    </Row>
  );
};
