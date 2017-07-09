import React from 'react';
import { Text, View, Button, Image, Dimensions, TouchableHighlight, StatusBar, TextInput } from 'react-native';
import { Container, Content, Form, Item, Input, Icon } from 'native-base';
import * as constants from '../constants'
import styles from './styles'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const SearchReturnObject = ({ emphasisColor }) => {
  return (

    <Item
      style={styles.searchObject.container}
    >

      <View
        id="return-object-head"
        style={[styles.searchObject.objectHead, {
          backgroundColor: emphasisColor
        }]}
      >
        <View style={styles.searchObject.locationStars}>
          <Text>Stars</Text>
        </View>

        <View style={styles.searchObject.locationMiles}>
          <Text style={styles.searchObject.locationMilesText}>2.5mi</Text>
        </View>

      </View>

      <View
        id="return-object-body"
        style={styles.searchObject.objectBody}
      >

        <View style={styles.searchObject.locationInfo}>
          <Text style={styles.searchObject.title}>
            Stans{"\n"}Doughnuts
          </Text>
          <Text style={styles.searchObject.hours}>
            <Text style={styles.searchObject.hoursEmph}>June 23, 2017</Text> {"\n"} 8pm -8pm
          </Text>
        </View>

        <TouchableHighlight style={[styles.searchObject.favoriteIcon, {
          backgroundColor: emphasisColor
        }]}>

          <Image style={styles.searchObject.favoriteIconImage} source={{uri: 'heart'}}></Image>

        </TouchableHighlight>

      </View>

    </Item>

  )
}

export default SearchReturnObject ;
