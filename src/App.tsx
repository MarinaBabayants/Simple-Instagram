import * as React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import { AuthPage } from './components/authPage/Auth';
import { MainPage } from './components/mainPage/MainPage';
import { PostPage } from './components/postPage/PostPage';

const App = () => {
  return (
    <div className="appContainer">
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <Route exact path="/mainPage" component={MainPage} />
        <Route exact path="/postPage/:id" component={PostPage} />
      </Switch>
    </div>
  );
};

export default App;
