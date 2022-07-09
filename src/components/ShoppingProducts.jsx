import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingProducts extends Component {
  render() {
    const { data: { title, quantidade, price } } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <p data-testid="shopping-cart-product-quantity">{ quantidade}</p>
        <p>{ price }</p>
      </div>
    );
  }
}
ShoppingProducts.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};
