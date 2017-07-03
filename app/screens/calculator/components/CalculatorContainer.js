//logic

import React, { Component } from 'react'
import CalculatorRender from './CalculatorRender'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as constants from  '../constants'
import * as actions from  '../actions'

class CalculatorContainer extends Component {

  constructor(props){
    super(props)

    this.buttonPress = this.buttonPress.bind(this)
  }

  buttonPress(buttonVal){
    console.log(buttonVal)
    this.props.actions.buttonActive(buttonVal)
    console.log(this)
  }

  render() {
    return (
      <CalculatorRender
        buttonSelect={this.buttonPress}
        buttonActive={this.props.ui.calculatorValues.doughnut.active}
      />
    );
  }

}

const mapStateToProps = (state) => {
  return {
    userinput: state[constants.NAME].userinput,
    ui: state[constants.NAME].ui,
  }
}

const mapDispatchToProps = (dispatch) => {
  const actionsToBind = Object.assign({}, actions);
  return {
    actions: bindActionCreators(actionsToBind, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);
