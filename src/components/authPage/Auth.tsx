import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export const AuthPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center mt-5 p-5 border table-borderless shadow-lg bg-white">
      <div className="h2 text-secondary">Welcome to my simple app!</div>
      <Link to="/mainPage">
        <Button className="btn btn-light mt-5 text-dark text-decoration-none w-100 border-dark">
          Click here to authorize
        </Button>
      </Link>
    </div>
  );
};
