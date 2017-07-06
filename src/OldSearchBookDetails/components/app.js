import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './actions/index';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      textValue: 'ABC'
    };
  }
  handleChange(e){
    this.setState({term: e.target.value});
  }
  render(){
    return (
        <div>
          <h1 className="jumbotron">Item Search App...</h1>
          <input type="text" onChange={this.handleChange.bind(this)} className="form-control" value={this.state.textValue}/>
        </div>
    );
  }
}

function mapStateToProps(state){
  items: state.itemList
}
export default connect(null,actions)(App);
