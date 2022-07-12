import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddBtn2 from '../components/AddBtn2';
import { getItemById } from '../services/api';
import ShoppingCartButton from '../components/ShoppingCartButton';
import '../styles/Details.css';
import FormRating from '../components/FormRating';

export default class Details extends Component {
  state = {
    selecionado: {},
    atributos: [],
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

  pegaLocalStorage = async () => {
    const selecionado = JSON.parse(localStorage.selecionado);
    const teste = await getItemById(selecionado.id);
    this.setState({
      selecionado,
      atributos: teste.attributes,
    });
  }

  setItem = (atributo, index) => {
    if (atributo.value_name) {
      return (
        <div key={ index }>
          <p>
            <b>{atributo.name}</b>
            {': '}
            {atributo.value_name}
          </p>
        </div>
      );
    }
  }

  render() {
    const { selecionado, atributos } = this.state;
    const preco = String(selecionado.price).replace('.', ',');
    return (
      <div className="container-da-pagina-details">
        <header className="cart-header-container header-details">
          <Link to="/">
            <img src="https://img.icons8.com/external-simple-solid-edt.graphics/344/external-Back-arrows-simple-solid-edt.graphics-2.png" alt="Voltar" className="voltar" />
          </Link>
          <div className="carrinho">
            <ShoppingCartButton />
          </div>
        </header>
        <main className="product-details-container">
          <section className="product-details">
            <section className="product-photo-and-name">
              <span
                data-testid="product-detail-name"
                className="nome"
              >
                { selecionado.title }

              </span>
              <img
                src={ selecionado.thumbnail }
                alt={ selecionado.name }
                className="imagem-details"
              />
              <span>{`Preço: R$${preco}`}</span>
              <AddBtn2
                data={ selecionado }
                adicionarAoCarrinho={ this.adicionarAoCarrinho }
              />
            </section>
            <section>
              <p>Especificações técnicas:</p>
              <div className="lista-especificacoes">
                { atributos.length && atributos.map((atributo, index) => (
                  this.setItem(atributo, index)
                )) }
              </div>
            </section>
          </section>
        </main>
        <FormRating />
      </div>
    );
  }
}
