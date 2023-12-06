import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ProdutoService from '../services/ProdutoService';

const ListaProdutosScreen = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const produtos = await ProdutoService.listarProdutos();
        setProdutos(produtos);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error.message);
      }
    };

    carregarProdutos();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Lista de Produtos:</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.descricao}</Text>
            <Text>Valor: {item.valor}</Text>
            <Text>Valor Promocional: {item.valorPromocional}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 12,
    paddingBottom: 8,
  },
});

export default ListaProdutosScreen;
