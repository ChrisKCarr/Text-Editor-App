import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { persistMiddleware } from './middlewares/persist-middleware';

export const store = createStore(
  reducer,
  {},
  applyMiddleware(persistMiddleware, thunk)
);
