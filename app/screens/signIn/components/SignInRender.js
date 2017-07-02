//frontend

import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import { Container, Content, Form, Item, Input } from 'native-base';


class SignInRender extends Component {

  constructor(props){ super(props) }

  render() {
    return (
      <Form>
        <Item>
          <Input placeholder="first name" />
        </Item>
        <Item>
          <Input placeholder="last name" />
        </Item>
      </Form>
    );
  }
}

export default SignInRender;
