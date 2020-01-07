import React, {Component} from 'react';
import PropTypes from "prop-types";
import './style.css';

export default class Card extends Component {
  constructor(props) {
    super(props);  
  }
  render() {
    return (
      <div class="card">
        <h2 class="contactcard">Contact Card</h2>
        <p class="info">Name: {this.props.name}</p>
        <p class="info">Email: {this.props.email}</p>
        <p class="info">Mobile Phone: {this.props.mphone}</p>
        <p class="info"> Work Phone: {this.props.wphone}</p>
      </div>
    );
  }
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  mphone: PropTypes.number.isRequired,
  wphone: PropTypes.number
}