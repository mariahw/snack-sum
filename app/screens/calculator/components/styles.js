import { StyleSheet, Dimensions, Platform } from 'react-native'
import * as constants from '../constants'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const buttonWidth = ( deviceWidth / 3 )
const rowHeight =  ( deviceHeight * 0.60 ) / 3


const Styles = {

  container: {
    backgroundColor: "white",
    borderWidth: 0,
  },

  imageContainer: {
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column"
  },

  functionalContainer: {
    backgroundColor: "transparent",
    flex: 0.40,
    flexDirection: "row",
    paddingLeft: 30,
  },

  functionalButton: {
    backgroundColor: "rgba(161, 218, 232, 1)",
    width: 60,
    height: 60,
    marginTop: 30
  },

  content: {
    borderWidth: 0,
    flex: 0.60 ,
    flexDirection: "column",
  },

  row: {
    flex: 1,
    flexDirection: 'row',
  },

  calculatorButton: {
    backgroundColor: "white",
    flex: 0.33,
    height: rowHeight,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: constants.EMPHASIS_COLOR,
  },

  calculatorButtonImage: {
    height: 90,
    width: 90
  }

}

export default Styles
