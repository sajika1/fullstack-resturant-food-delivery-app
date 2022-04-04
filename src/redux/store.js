import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// use thunk to async action requests
import thunk from 'redux-thunk';

// combine all reducers in this file
import rootReducer from './rootReducer';

const store = createStore(rootReducer , composeWithDevTools( applyMiddleware(thunk) ));

export default store;