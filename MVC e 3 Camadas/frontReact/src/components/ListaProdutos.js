import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const ListaProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const response = await axios.get('http://localhost:8080/produtos');
        setProdutos(response.data);
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

export default ListaProdutos;
