//frontend

import React, { Component } from 'react';
import { Text, View, Button, Image, Dimensions} from 'react-native';
import { Container, Content, Form, Item, Input } from 'native-base';
import * as constants from '../constants';
import styles from './styles';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class SignInRender extends Component {

  constructor(props){ super(props) }

  render() {
    return (

      <Container>

        <Content>

          <Image
            source={{ uri: constants.BACKGROUND_SCREEN }}
            style={styles.imageContainer}
          >

            <Form>
              <Item>
                <Input placeholder="first name" />
              </Item>
              <Item>
                <Input placeholder="last name" />
              </Item>
            </Form>

          </Image>

        </Content>

      </Container>

    );
  }
}

export default SignInRender;
