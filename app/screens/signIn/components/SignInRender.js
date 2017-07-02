//frontend

import React, { Component } from 'react';
import { Text, View, Button, Image, Dimensions, TouchableHighlight, StatusBar } from 'react-native';
import { Container, Content, Form, Item, Input } from 'native-base';
import * as constants from '../constants';
import styles from './styles';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class SignInRender extends Component {

  constructor(props){ super(props) }

  render() {
    return (

      <Container style={styles.container} >

        <StatusBar hidden={true} />

        <Image source={{ uri: constants.BACKGROUND_SCREEN }} style={styles.imageContainer}>

          <View id="flex-padding" style={styles.flexPadding}></View>

          <View style={styles.content}>

              <Form
                style={styles.form}
              >
                <Item regular style={styles.item}>
                  <Input style={styles.input} placeholder="first name" />
                </Item>
                <Item regular style={styles.item}>
                  <Input style={styles.input} placeholder="last name" />
                </Item>

                <TouchableHighlight style={styles.submit}>
                  <Text style={styles.submitButtonText}>yyyyuuuuummm</Text>
                </ TouchableHighlight>

              </Form>

              <Text style={styles.quote}>
                <Text style={styles.quoteEmphasis}>obesity</Text> is a word found only in the dictionary of fools
              </Text>

          </View>

        </Image>

      </Container>

    );
  }
}

export default SignInRender;
