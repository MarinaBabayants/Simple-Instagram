import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImg, CardText, Col, Row } from 'reactstrap';
import { BsHeart } from 'react-icons/bs';
import { convertTimestampToDate } from '../../utills/utills';

type Props = {
  userName: string;
  img: string;
  timestamp: string;
  postId: string;
  likes: number;
  caption?: string;
};

export const PostCard = ({ userName, img, caption, timestamp, postId, likes }: Props) => {
  return (
    <div className="w-50 my-2 rounded shadow-lg ">
      <Link to={'postPage/' + postId} className="text-muted text-decoration-none">
        <Card>
          <div className="ml-3 h4 text-muted">
            <b>{userName}</b>
          </div>
          <CardImg top width="100%" src={img} alt="Card image cap" />
          <CardBody>
            <Row>
              <Col className="d-flex justify-content-between">
                <CardText>
                  <b>Опубликовано</b>: {convertTimestampToDate(timestamp)}
                </CardText>
                <CardText>
                  <BsHeart className="mr-1" />
                  {likes}
                </CardText>
              </Col>
            </Row>
            {caption ? (
              <CardText>
                <b>Заголовок</b>: {caption}
              </CardText>
            ) : null}
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};
