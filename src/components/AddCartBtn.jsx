import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddCartBtn extends Component {
  render() {
    const { data, adicionarAoCarrinho } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => adicionarAoCarrinho(data) }
          className="btn btn-outline-primary add-btn"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

AddCartBtn.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  adicionarAoCarrinho: PropTypes.func.isRequired,
};
