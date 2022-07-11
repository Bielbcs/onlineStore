import React, { Component } from 'react';
import AddBtn2 from '../components/AddBtn2';
import ShoppingCartButton from '../components/ShoppingCartButton';

export default class Details extends Component {
  state = {
    selecionado: {},
  }

  componentDidMount() {
    this.pegaLocalStorage();
  }

  adicionarAoCarrinho = () => {
    const { selecionado } = this.state;
    if (localStorage.carrinho) {
      const novoArray = [...JSON.parse(localStorage.carrinho), selecionado];

      const quantidade = novoArray.filter((item) => item.id === selecionado.id).length;

      localStorage.setItem(selecionado.id, JSON.stringify(quantidade));
      localStorage.carrinho = JSON.stringify(novoArray);
    } else {
      localStorage.carrinho = JSON.stringify([selecionado]);
    }
  }

  pegaLocalStorage = () => {
    const selecionado = JSON.parse(localStorage.selecionado);
    this.setState({ selecionado });
  }

  render() {
    const { selecionado } = this.state;
    return (
      <div>
        <p data-testid="product-detail-name">{ selecionado.title }</p>
        <AddBtn2
          data={ selecionado }
          adicionarAoCarrinho={ this.adicionarAoCarrinho }
        />
        <ShoppingCartButton />
      </div>
    );
  }
}
