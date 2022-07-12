import React, { Component } from 'react';

export default class Checkout extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          <input
            type="text"
            name=""
            data-testid="checkout-fullname"
            placeholder="Nome Completo"
            id="name"
          />
        </label>
        <label htmlFor="email">
          <input type="email" name="email" id="email" data-testid="checkout-email" />
        </label>
        <label htmlFor="cpf">
          <input type="text" name="cpf" id="cpf" data-testid="checkout-cpf" />
        </label>
        <label htmlFor="telephone">
          <input
            type="text"
            name="telephone"
            id="telephone"
            data-testid="checkout-phone"
          />
        </label>
        <label htmlFor="cep">
          <input type="text" name="cep" id="cep" data-testid="checkout-cep" />
        </label>
        <label htmlFor="address">
          <input type="text" name="address" id="address" data-testid="checkout-address" />
        </label>
      </form>
    );
  }
}
