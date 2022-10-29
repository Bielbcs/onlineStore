import React, { Component } from 'react';
import propTypes from 'prop-types';
import '../styles/Checkout.css';

export default class Checkout extends Component {
  handleBuyClick = () => {
    const { history } = this.props;
    localStorage.clear();
    history.push('/');
  }

  render() {
    return (
      <div className="checkout-container">
        <h2>Confirme seus dados!</h2>
        <form className="checkout-form-container" autoComplete="off">
          <label htmlFor="name">
            <input
              className="form-control"
              type="text"
              name=""
              data-testid="checkout-fullname"
              placeholder="Nome Completo"
              id="name"
            />
          </label>
          <label htmlFor="email">
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              data-testid="checkout-email"
            />
          </label>
          <label htmlFor="cpf">
            <input
              className="form-control"
              type="text"
              name="cpf"
              placeholder="CPF"
              id="cpf"
              data-testid="checkout-cpf"
            />
          </label>
          <label htmlFor="telephone">
            <input
              className="form-control"
              type="text"
              name="telephone"
              placeholder="Telefone"
              id="telephone"
              data-testid="checkout-phone"
            />
          </label>
          <label htmlFor="cep">
            <input
              className="form-control"
              type="text"
              name="cep"
              placeholder="CEP"
              id="cep"
              data-testid="checkout-cep"
            />
          </label>
          <label htmlFor="address">
            <input
              className="form-control"
              type="text"
              name="address"
              placeholder="Endereço"
              id="address"
              data-testid="checkout-address"
            />
          </label>
          <button
            type="button"
            className="btn btn-primary"
            onClick={ this.handleBuyClick }
          >
            Comprar
          </button>
        </form>
      </div>
    );
  }
}

Checkout.propTypes = {
  history: propTypes.objectOf(propTypes.any).isRequired,
};
