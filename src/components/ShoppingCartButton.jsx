import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCartButton extends Component {
  render() {
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img
            className="cart-image"
            width="40"
            height="40"
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt="Carrinho de compras"
          />
        </Link>
      </div>
    );
  }
}
