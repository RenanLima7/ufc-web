const { randomUUID } = require("crypto");

let produtos = [];

function addProduto({ nome, descricao, preco, categoria, camposCustomizados, usuario }) {
  const id = randomUUID();
  produtos.push({
    id,
    nome,
    descricao: descricao.trim(),
    preco,
    categoria,
    camposCustomizados,
    usuario
  });
}

function editProduto({
  id,
  nome,
  descricao,
  preco,
  categoria,
  camposCustomizados,
  usuario
}) {
  const produto = produtos.map((item) => {
    if (item.id === id) {
      return {
        id: item.id,
        nome: nome || item.nome,
        descricao: descricao.trim() || item.descricao.trim(),
        preco: preco || item.preco,
        categoria: categoria || item.categoria,
        camposCustomizados: camposCustomizados || item.camposCustomizados,
        usuario: item.usuario
      };
    }

    return item;
  });

  produtos = [];
  produtos = [...produto];
}

function findProdutoById(id) {
  const produto = produtos.find((item) => item.id === id);
  return produto;
}

function getProduto() {
  return produtos;
}

function getProdutoByUser(usuario) {
  const produto = produtos.find((item) => item.usuario === usuario);
  return produto;
}

module.exports = { addProduto, getProduto, editProduto, findProdutoById };
