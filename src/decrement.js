import React, {Component} from 'react';
import PropTypes from "prop-types";

export default class Decrement extends Component {
  increment = function () {
    if(this.state.num == 0){
      alert("Cannot be less than zero");
    }
    else this.setState({num: this.state.num - 1})
  }
  constructor(props) {
    super(props);  
    this.state = {
      num: this.props.startNum
    };
    this.increment = this.increment.bind(this);
  }
  render() {
    return (
      <div>
        <button id="button" class="button" onClick={this.increment}> Decrement </button> {this.state.num}
      </div>
    );
  }
};

Decrement.propTypes = {
  startNum: PropTypes.number.isRequired
}