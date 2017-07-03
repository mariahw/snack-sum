//logic

import React, { Component } from 'react';
import SignInRender from './SignInRender'

class SignInContainer extends Component {

  constructor(props){
    super(props)

    this.onChange = this.onChange.bind(this);
  }

  onChange(val){
    console.log(val)
  }

  render() {
    return (
      <SignInRender
        onChange = {this.onChange}
      />
    );
  }
}

export default SignInContainer;
