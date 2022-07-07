import React from 'react';

class Home extends React.Component {
  state = {
    produtos: [],
  }

  render() {
    const { produtos } = this.state;
    return (
      <div>
        <label htmlFor="search">
          <input type="text" />
        </label>
        {!produtos.length
          && (
            <span data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </span>
          )}
      </div>
    );
  }
}

export default Home;
