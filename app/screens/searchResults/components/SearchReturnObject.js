import React from 'react';
import { Text, View, Button, Image, Dimensions, TouchableHighlight, StatusBar, TextInput } from 'react-native';
import { Container, Content, Form, Item, Input, Icon } from 'native-base';
import * as constants from '../constants'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const SearchReturnObject = ({ props, buttonVal, pressFunctionCallback, buttonsState }) => {
  return (

    <Item
      style={styles.container}
    >

      <View
        id="return-object-head"
        style={styles.objectHead}
      >
        <View style={styles.locationStars}>
          <Text>Stars</Text>
        </View>

        <View style={styles.locationMiles}>
          <Text style={styles.locationMilesText}>2.5mi</Text>
        </View>

      </View>

      <View
        id="return-object-body"
        style={styles.objectBody}
      >

        <View style={styles.locationInfo}>
          <Text style={styles.title}>
            Stans{"\n"}Doughnuts
          </Text>
          <Text style={styles.hours}>
            June 23, 2017 {"\n"} 8pm -8pm
          </Text>
        </View>

        <TouchableHighlight style={styles.favoriteIcon}>
          <Image source={{uri: constants.LIKE_ICON}}></Image>
        </TouchableHighlight>

      </View>

    </Item>

  )
}

export default SearchReturnObject ;

const styles = {

  container: {
    height: 125,
    backgroundColor: "purple",
    justifyContent: "flex-start",
    flexDirection: 'column',
    marginBottom: 20,
    marginLeft: 0,
  },

  objectHead: {
    backgroundColor: constants.EMPHASIS_COLOR,
    width: deviceWidth,
    flex: 0.35,
    justifyContent: "center",
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 15,
  },

  locationStars: {
    flex: 0.5,
    justifyContent: "center",
  },

  locationMiles: {
    flex: 0.5,
    justifyContent: "center",
  },

  locationMilesText: {
    textAlign: "right",
    color: "white",
    fontWeight: 'bold',
    fontSize: 17.5,
  },

  objectBody: {
    backgroundColor: 'white',
    width: deviceWidth,
    flex: 0.65,
    flexDirection: 'row'
  },

  locationInfo: {
    flex: 0.65,
    backgroundColor: "white",
    flexDirection: "row",
    paddingTop: 10.5,
    paddingLeft: 15,
    paddingRight: 15
  },

  title: {
    fontWeight: "bold",
    flex: 0.5,
    fontSize: 22.5
  },

  hours: {
    textAlign: "right",
    flex: 0.5
  },

  favoriteIcon: {
    backgroundColor: constants.EMPHASIS_COLOR,
    flex: 0.25,
    opacity: 0.5
  },


}
