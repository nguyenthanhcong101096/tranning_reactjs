import * as types from '../constants/types';

var initialState = {
  company: '1pac.vn'
}

var myReducer = (state = initialState, action) => {
  if (action.type === types.CHANGE_COMPANY) {
    var { company } = action
    return { company }
  }
  return state;
}

export default myReducer
