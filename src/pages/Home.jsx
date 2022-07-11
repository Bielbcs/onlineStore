import React from 'react';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';
import ShoppingCartButton from '../components/ShoppingCartButton';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import '../styles/Home.css';

class Home extends React.Component {
  state = {
    produtos: [],
    categoriesList: [],
    categoriaSelecionada: '',
    jaPesquisou: false,
    valorDoInput: '',
  }

  componentDidMount() {
    this.pegaCategorias();
  }

  adicionarAoCarrinho = (data) => {
    if (localStorage.carrinho) {
      const novoArray = [...JSON.parse(localStorage.carrinho), data];

      const quantidade = novoArray.filter((item) => item.id === data.id).length;

      localStorage.setItem(data.id, JSON.stringify(quantidade));
      localStorage.carrinho = JSON.stringify(novoArray);
    } else {
      localStorage.carrinho = JSON.stringify([data]);
    }
  }

  pegaCategorias = async () => {
    this.setState({ categoriesList: await getCategories() });
  }

  pegaCategoriaSelecionada = async (categoria) => {
    const produtosDaCategoria = await getProductsFromCategoryAndQuery(categoria, '');
    this.setState({ categoriaSelecionada: categoria,
      produtos: produtosDaCategoria.results });
  }

  buscaProdutos = async (e) => {
    e.preventDefault();
    const { valorDoInput, categoriaSelecionada } = this.state;
    if (categoriaSelecionada === '') {
      const resposta = await getProductsFromCategoryAndQuery('', valorDoInput);
      this.setState({ produtos: resposta.results, jaPesquisou: true });
    } else {
      const resposta = await getProductsFromCategoryAndQuery(categoriaSelecionada,
        valorDoInput);
      this.setState({ produtos: resposta.results, jaPesquisou: true });
    }
  }

  renderizaProdutos = () => {
    const { produtos } = this.state;
    if (!produtos.length) return <span>Nenhum produto encontrado</span>;
    return produtos.map((produto) => (<ProductCard
      key={ produto.id }
      data={ produto }
      adicionarAoCarrinho={ this.adicionarAoCarrinho }
    />));
  }

  render() {
    const { produtos, categoriesList, valorDoInput,
      jaPesquisou } = this.state;
    return (
      <div>
        <div className="container-do-header mb-3">
          <form onSubmit={ (e) => this.buscaProdutos(e) } className="form-container">
            <label htmlFor="search">
              <input
                type="text"
                data-testid="query-input"
                value={ valorDoInput }
                onChange={ (currentElement) => {
                  this.setState({ valorDoInput: currentElement.target.value });
                } }
                className="form-control search-input"
              />
            </label>
            <button
              type="submit"
              data-testid="query-button"
              className="btn btn-primary search-button"
            >
              Pesquisar
            </button>
          </form>
          <div>
            <ShoppingCartButton />
          </div>
        </div>
        <div className="lista-e-resultado">
          <section className="lista-de-categorias">
            { categoriesList.map((categoria) => (<Categories
              key={ categoria.id }
              id={ categoria.id }
              nome={ categoria.name }
              pegaCategoriaSelecionada={ this.pegaCategoriaSelecionada }
            />)) }
          </section>
          <section className="container-do-resultado">
            {(!produtos.length && !jaPesquisou)
              ? (
                <span data-testid="home-initial-message">
                  Digite algum termo de pesquisa ou escolha uma categoria.
                </span>
              )
              : this.renderizaProdutos()}
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
