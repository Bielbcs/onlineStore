import React, { Component } from 'react';
import PropType from 'prop-types';
import '../styles/ProductCard.css';
import AddCartBtn from './AddCartBtn';

export default class ProductCard extends Component {
  render() {
    const { data, adicionarAoCarrinho } = this.props;
    const { price, thumbnail, title } = data;
    return (
      <div className="card-do-produto" data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <p>{ title }</p>
        <span>{`Preço: R$${price}`}</span>
        <AddCartBtn adicionarAoCarrinho={ adicionarAoCarrinho } data={ data } />
      </div>
    );
  }
}

ProductCard.propTypes = {
  data: PropType.objectOf(PropType.any).isRequired,
  adicionarAoCarrinho: PropType.func.isRequired,
};
