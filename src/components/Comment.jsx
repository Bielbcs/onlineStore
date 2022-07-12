import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Comment extends Component {
  render() {
    const { email, rating, review } = this.props;
    return (
      <div>
        <p>{email}</p>
        <p>{review}</p>
        <span>{rating}</span>
      </div>
    );
  }
}

Comment.propTypes = {
  email: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};
