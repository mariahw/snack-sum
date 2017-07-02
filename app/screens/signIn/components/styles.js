import { StyleSheet, Dimensions, Platform } from 'react-native'
import constants from '../constants'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Styles = {

  imageContainer: {
    width: deviceWidth,
    height: deviceHeight,
  }

}

export default Styles
