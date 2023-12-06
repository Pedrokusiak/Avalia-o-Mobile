import AsyncStorage from '@react-native-async-storage/async-storage';

class ProdutoService {
  static async listarProdutos() {
    try {
      const produtosString = await AsyncStorage.getItem('produtos');
      const produtos = produtosString ? JSON.parse(produtosString) : [];
      return produtos;
    } catch (error) {
      console.error('Erro ao obter a lista de produtos:', error);
      throw error;
    }
  }

  static async cadastrarProduto(produto) {
    try {
      const produtos = await this.listarProdutos();
      const novoProduto = { ...produto, id: produtos.length + 1 };
      produtos.push(novoProduto);
      await AsyncStorage.setItem('produtos', JSON.stringify(produtos));
      return novoProduto;
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      throw error;
    }
  }
}

export default ProdutoService;
