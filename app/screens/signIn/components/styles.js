import { StyleSheet, Dimensions, Platform } from 'react-native'
import * as constants from '../constants'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

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

  flexPadding: {
    backgroundColor: "transparent",
    flex: 0.5 ,
  },

  content: {
    backgroundColor: "transparent",
    borderWidth: 0,
    flex: 0.5 ,
    paddingLeft: 35,
    paddingRight: 35,
  },

  form: {
  },

  item: {
    paddingLeft: 15,
    marginLeft: 0,
    backgroundColor: "rgba(255,255,255,0.45)",
    borderWidth: 1.5,
    marginBottom: 15,
    borderColor: constants.EMPHASIS_COLOR,
  },

  input: {
    fontWeight: 'bold',
  },

  submit: {
    backgroundColor: constants.EMPHASIS_COLOR,
    opacity: 0.65,
    paddingTop: 12.5,
    paddingBottom: 12.5,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },

  quote: {
    fontSize: 22.5,
  },

  quoteEmphasis: {
    fontWeight: "bold",
    color: constants.EMPHASIS_COLOR,
  }

}

export default Styles
