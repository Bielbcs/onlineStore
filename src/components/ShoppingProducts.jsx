import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ShoppingProducts.css';

export default class ShoppingProducts extends Component {
  state = {
    quantidade: 1,
  }

  componentDidMount() {
    this.pegaQuantidade();
  }

  pegaQuantidade = () => {
    const { data } = this.props;
    const quantidade = JSON.parse(localStorage.getItem(data.id));
    if (quantidade > 1) {
      this.setState({ quantidade });
    }
  }

  aumentaQuantidade = () => {
    const { data } = this.props;
    const { quantidade } = this.state;
    this.setState({ quantidade: quantidade + 1 });
    localStorage.setItem(data.id, quantidade + 1);
  }

  diminuiQuantidade = () => {
    const { data, del } = this.props;
    const { quantidade } = this.state;
    if (quantidade > 1) {
      this.setState({ quantidade: quantidade - 1 });
      return localStorage.setItem(data.id, quantidade - 1);
    }
    return del(data);
  }

  render() {
    const { data: { title, price, thumbnail } } = this.props;
    const { quantidade } = this.state;

    const test = price * quantidade;

    const fixedTest = test.toFixed(2);

    return (
      <div className="produto-do-carrinho">
        <img src={ thumbnail } alt="title" />
        <p data-testid="shopping-cart-product-name" className="title">{ title }</p>
        <p className="preco">{`Preço: R$${price}` }</p>
        <div className="aumenta-abaixa-quantidade">

          <button
            type="button"
            data-testid="product-decrease-quantity"
            className="botao-muda-quantidade"
            onClick={ () => { this.diminuiQuantidade(); } }
          >
            -
          </button>
          <span
            data-testid="shopping-cart-product-quantity"
            className="quantidade"
          >
            { quantidade }
          </span>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ () => { this.aumentaQuantidade(); } }
            className="botao-muda-quantidade"
          >
            +
          </button>
        </div>
        <p className="preco">{`Preço total: R$${fixedTest}`}</p>
      </div>
    );
  }
}
ShoppingProducts.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  del: PropTypes.func.isRequired,
};
