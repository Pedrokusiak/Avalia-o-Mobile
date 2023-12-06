import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListaProdutos = ({ produtos }) => {
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
