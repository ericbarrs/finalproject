import { createStore, applyMiddleware, compose } from'redux';
import reducers from './reducers/reducers';
import thunk from 'redux-thunk';

const middleware = [thunk]
const initialState = {};

let store  = createStore(reducers,initialState,
compose(applyMiddleware(...middleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store