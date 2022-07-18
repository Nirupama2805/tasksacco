import { createStore, applyMiddleware, compose } from 'redux';
import Reduxthunk from 'redux-thunk';
import rootReducer from './Reducers';
import thunk from 'redux-thunk';


const middlewares = [Reduxthunk];


export default () => {
   let store = createStore(rootReducer,
     compose(applyMiddleware(...middlewares))
   )
   return { store }
}