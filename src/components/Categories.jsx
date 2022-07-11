import React, { Component } from 'react';
import PropType from 'prop-types';

export default class Categories extends Component {
  render() {
    const { nome, id, pegaCategoriaSelecionada } = this.props;
    return (
      <label data-testid="category" htmlFor={ id } className="radio">
        <input
          type="radio"
          id={ id }
          name="categorie"
          onClick={ () => pegaCategoriaSelecionada(id) }
        />
        <span>{ nome }</span>
      </label>
    );
  }
}

Categories.propTypes = {
  nome: PropType.string,
  id: PropType.string,
}.isRequired;
