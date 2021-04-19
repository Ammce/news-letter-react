import { createStore, applyMiddleware, combineReducers } from 'redux';
// eslint-disable-next-line
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ConsentsReducer from './modules/Consents/redux/Consents.reducer';

const middleware = [thunk];
const initialState = {};

const rootReducer = combineReducers({
  consents: ConsentsReducer,
});

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export type AppState = ReturnType<typeof rootReducer>;

export default store;
