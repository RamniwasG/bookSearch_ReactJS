import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import BookList from '../container/book_list';
import BookDetail from '../container/book_detail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.props.searchBooks(event.target.value);
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="jumbotron"><h1>Book Store Search App</h1></div>

        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <h5>Search..</h5><input value={this.state.term} className="form-control" onChange={this.onInputChange} />
          </div>
          <div className="col-sm-2"></div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <BookList />
          </div>
          <div className="col-sm-4">
            <BookDetail />
          </div>
        </div>
      </div>
    );
  }
};

export default connect(null, actions)(App);
