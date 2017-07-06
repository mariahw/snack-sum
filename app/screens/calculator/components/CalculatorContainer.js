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

    this.searchQuery = []
    this.buttonPress = this.buttonPress.bind(this)
    this.buttonToggleActive = this.buttonToggleActive.bind(this)
    this.clearCalculatorSearch = this.clearCalculatorSearch.bind(this)
    this.submitCalculatorSearch = this.submitCalculatorSearch.bind(this)
  }

  buttonPress(buttonVal){
    this.props.actions.buttonActive(buttonVal)
  }

  buttonToggleActive(buttonVal){
    this.props.actions.buttonActive(buttonVal)
  }

  clearCalculatorSearch(){
    this.props.actions.clearCalculatorSearch();
  }

  submitCalculatorSearch(){

    const stateVals = this.props.ui.calculatorValues;

    this.searchQuery = []

    for (var prop in stateVals){
      let currProp = prop
      let currPropActiveVal = stateVals[currProp].active
      if ( currPropActiveVal == true )
        this.searchQuery.push(currProp)
    }

    this.props.actions.submitCalculatorSearch(this.searchQuery)
    console.log(this.props)

  }

  render() {

    const { ui } = this.props;
    let buttonsUI = ui.calculatorValues;

    return (
      <CalculatorRender
        buttonPress={this.buttonPress}
        buttonsState={ buttonsUI }
        clearSearch={ this.clearCalculatorSearch }
        submitSearch={ this.submitCalculatorSearch }
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
