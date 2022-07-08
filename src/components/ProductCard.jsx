import React, { Component } from 'react';
import PropType from 'prop-types';
import '../styles/ProductCard.css';

export default class ProductCard extends Component {
  render() {
    const { data } = this.props;
    const { price, thumbnail, title } = data;
    return (
      <div className="card-do-produto" data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <p>{ title }</p>
        <span>{`Preço: R$${price}`}</span>
      </div>
    );
  }
}

ProductCard.propTypes = {
  data: PropType.objectOf(PropType.any).isRequired,
};
