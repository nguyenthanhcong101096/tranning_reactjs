import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as action from './actions/index';

class TranningRedux extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h3>Redux show</h3>
        <h4>user: {this.props.user}</h4>
        <h4>company: {this.props.company}</h4>
        <button onClick={() => { this.props.change_user('conncet') }}>Change user</button>
        <button onClick={() => { this.props.change_company('conncet') }}>Change company</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    company: state.company.company
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    change_user: (user) => {
      dispatch(action.CHANGE_USER(user))
    },
    change_company: (company) =>{
      dispatch(action.CHANGE_COMPANY(company))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TranningRedux);
