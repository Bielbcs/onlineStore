export async function getCategories() {
  const categorias = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const resposta = await categorias.json();
  return resposta;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const resposta = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const produtos = await resposta.json();
  return produtos;
}
