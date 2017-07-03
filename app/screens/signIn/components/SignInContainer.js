//logic

import React, { Component } from 'react'
import SignInRender from './SignInRender'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as constants from  '../constants'
import * as actions from  '../actions'


class SignInContainer extends Component {

  constructor(props){
    super(props)

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(val){
    console.log(val)
  }

  onSubmit(val){
    this.props.actions.submitUser(val)
    console.log(this)
  }

  render() {
    return (
      <SignInRender
        onChange = {this.onChange}
        onSubmit = {this.onSubmit}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    useremail: state[constants.NAME].username,
    userpassword: state[constants.NAME].userpassword,
  }
}

const mapDispatchToProps = (dispatch) => {
  const actionsToBind = Object.assign({}, actions);
  return {
    actions: bindActionCreators(actionsToBind, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
