import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as constants from  '../constants'
import * as actions from  '../actions'
import SearchReturnRender from './SearchReturnRender'

class SearchReturnContainer extends Component {

  constructor(props){
    super(props)

  }

  render() {

    return (
      <SearchReturnRender
      />
    );
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  const actionsToBind = Object.assign({}, actions);
  return {
    actions: bindActionCreators(actionsToBind, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchReturnContainer);
