import { createStore } from 'redux';
import * as action from './actions/index';
import myReducer from './reducers/index';

const store = createStore(myReducer);

store.dispatch(action.CHANGE_COMPANY('Công ty mới'))
store.dispatch(action.CHANGE_USER('Nhân viên mới'))

console.log('after', store.getState())
