import React, { Component } from 'react';
import ShoppingProducts from '../components/ShoppingProducts';

export default class ShoppingCart extends Component {
  state = {
    produtos: [],
  }

  componentDidMount() {
    this.pegaLocalStorage();
  }

  pegaLocalStorage = () => {
    const carrinhoDeCompras = JSON.parse(localStorage.getItem('carrinho'));
    this.setState({ produtos: carrinhoDeCompras });
  }

  render() {
    const { produtos } = this.state;
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        { produtos.map((produto, index) => (<ShoppingProducts
          key={ index }
          data={ produto }
        />))}
      </div>
    );
  }
}
