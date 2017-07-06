import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Please Select a book..<div className="jumbotron"></div></div>
    }

    return (
      <div className="jumbotron">
      <h3><strong>details are..</strong></h3>
        Title: {this.props.book.title}<br />
        Pages: {this.props.book.pages}
      </div>
    );
  }
}

function mapStateToProps({selectedBook}) {
  return { book: selectedBook };
}

export default connect(mapStateToProps)(BookDetail);
