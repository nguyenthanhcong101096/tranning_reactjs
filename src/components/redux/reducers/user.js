import * as types from '../constants/types';

var initialState = {
  user: 'người dùng củ'
}

var myReducer = (state = initialState, action) => {
  if (action.type === types.CHANGE_USER) {
    var { user } = action;
    return {
      user
    }
  }
  return state;
}

export default myReducer
