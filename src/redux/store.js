import {createStore, combineReducers} from 'redux';
import { applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {todosReducers} from './reducers/todosReducers';

const reducer = combineReducers({
    todos : todosReducers
})

const middleware=[thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store;

