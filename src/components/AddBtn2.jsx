import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddCartBtn extends Component {
  render() {
    const { adicionarAoCarrinho } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ adicionarAoCarrinho }
          className="btn btn-outline-primary add-btn"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

AddCartBtn.propTypes = {
  adicionarAoCarrinho: PropTypes.func.isRequired,
};
