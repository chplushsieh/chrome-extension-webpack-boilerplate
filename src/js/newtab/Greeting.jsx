import React, {Component} from 'react';
import {connect} from 'react-redux';

class Greeting extends Component {
  componentDidMount() {
    document.addEventListener('click', () => {
      this.props.dispatch({
        type: 'ADD_COUNT'
      });
    });
  }

  render () {
    return (
      <div>
        <p>Hello, find me on src/js/newtab/Greeting.jsx</p>
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
