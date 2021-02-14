import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { PostsReducer } from './redux/reducer';
import thunk from 'redux-thunk';

export const store = createStore(PostsReducer, composeWithDevTools(applyMiddleware(thunk)));
