import React, { Component } from 'react';
import PropType from 'prop-types';
import '../styles/ProductCard.css';
import { Link } from 'react-router-dom';
import AddCartBtn from './AddCartBtn';

export default class ProductCard extends Component {
  setaLocalStorage = () => {
    const { data } = this.props;
    localStorage.selecionado = JSON.stringify(data);
  }

  render() {
    const { data, adicionarAoCarrinho } = this.props;
    const { price, thumbnail, title } = data;
    return (

      <div className="card-do-produto" data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <p className="nome-do-produto">{ title }</p>
        <span>{`Preço: R$${price}`}</span>
        <AddCartBtn adicionarAoCarrinho={ adicionarAoCarrinho } data={ data } />
        <Link
          to="/details"
          onClick={ this.setaLocalStorage }
          data-testid="product-detail-link"
        >
          <button type="button">Mais detalhes</button>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  data: PropType.objectOf(PropType.any).isRequired,
  adicionarAoCarrinho: PropType.func.isRequired,
};
