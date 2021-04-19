import { createStore, applyMiddleware, combineReducers } from 'redux';
// eslint-disable-next-line
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ConsentsReducer from './modules/Consents/redux/Consents.reducer';

const middleware = [thunk];
const initialState = {};

const store = createStore(
  combineReducers({
    consents: ConsentsReducer,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
