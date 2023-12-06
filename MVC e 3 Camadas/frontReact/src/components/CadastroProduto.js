import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const CadastroProduto = () => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [valorPromocional, setValorPromocional] = useState('');

  const cadastrarProduto = async () => {
    try {
      const response = await axios.post('http://localhost:8080/produtos', {
        descricao,
        valor: parseFloat(valor),
        valorPromocional: parseFloat(valorPromocional),
      });

      console.log('Produto cadastrado:', response.data);
      // Limpar os campos após o cadastro
      setDescricao('');
      setValor('');
      setValorPromocional('');
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Descrição:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDescricao}
        value={descricao}
      />

      <Text>Valor:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setValor}
        value={valor}
        keyboardType="numeric"
      />

      <Text>Valor Promocional:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setValorPromocional}
        value={valorPromocional}
        keyboardType="numeric"
      />

      <Button title="Cadastrar Produto" onPress={cadastrarProduto} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default CadastroProduto;
