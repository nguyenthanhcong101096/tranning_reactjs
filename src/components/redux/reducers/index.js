import { combineReducers } from 'redux'; // gọp 2 reducer lại
import user from './user';
import company from './company';

const myReducer = combineReducers({
  user,
  company
})

export default myReducer
