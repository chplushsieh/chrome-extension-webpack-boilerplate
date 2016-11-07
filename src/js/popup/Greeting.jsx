import React, {Component} from 'react';
import {connect} from 'react-redux';

class Greeting extends Component {
  render () {
    return (
      <div>
        <p>Hello, find me on src/js/popup/Greeting.jsx</p>
        <p>Click Count: {this.props.count}</p>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(Greeting);
