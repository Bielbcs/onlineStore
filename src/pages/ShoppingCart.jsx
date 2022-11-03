import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingProducts from '../components/ShoppingProducts';
import '../styles/ShoppingCart.css';

export default class ShoppingCart extends Component {
  state = {
    produtos: [],
  }

  componentDidMount() {
    this.pegaLocalStorage();
  }

  pegaLocalStorage = () => {
    if (localStorage.carrinho) {
      const carrinhoDeCompras = JSON.parse(localStorage.getItem('carrinho'));

      const ids = carrinhoDeCompras.map((item) => item.id);

      const semRepetidos = [...new Set(ids)];

      const produtos = [];

      semRepetidos.forEach((unique) => {
        produtos.push(carrinhoDeCompras.find((item) => item.id === unique));
      });

      this.setState({ produtos });
    }
  }

  del = (data) => {
    const { produtos } = this.state;
    const filteredProducts = produtos.filter(({ id }) => id !== data.id);

    this.setState({ produtos: filteredProducts }, () => {
      localStorage.carrinho = JSON.stringify(filteredProducts);
    });
  }

  render() {
    const { produtos } = this.state;
    return (
      <div className="container-da-pagina">
        <div className="cart-header-container">
          <Link to="/">
            <img src="https://img.icons8.com/external-simple-solid-edt.graphics/344/external-Back-arrows-simple-solid-edt.graphics-2.png" alt="Voltar" className="voltar" />
          </Link>
          <h3>Carrinho de produtos</h3>
        </div>
        {!produtos.length ? (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        ) : (
          <div className="lista-do-carrinho">
            { produtos.map((produto, index) => (<ShoppingProducts
              key={ index }
              data={ produto }
              del={ this.del }
            />))}
            <Link to="/checkout">
              <button
                type="button"
                className="btn btn-primary"
                data-testid="checkout-products"
              >
                Finalizar compra
              </button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}
