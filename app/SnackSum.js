import React from 'react';
import {
  View
} from 'react-native';
import signIn from './screens/signIn'

const { SignIn } = signIn.components


class SnackSum extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <SignIn />
    )
  }
}

export default SnackSum;
