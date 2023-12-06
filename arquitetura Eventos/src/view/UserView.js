import React, { Component } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TextInput } from 'react-native';
import UserViewService from '../services/userViewService';

class UserView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      userName: '',
    };

    this.service = new UserViewService(this);
  }

  componentDidMount() {
    this.service.loadUserListFromAPI();
  }

  renderUserItem = ({ item }) => (
    <View style={styles.userItem}>
      <Text style={styles.userName}>{item.name}</Text>
      <Button title="Excluir" onPress={() => this.service.deleteUser(item.id)} />
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.heading}>User App</Text>
          <View style={styles.buttonContainer}>
            <Button title="Listar Via API" onPress={() => this.service.loadUserListFromAPI()} />
            <View style={{ width: 10 }} />
            <Button title="Fechar Lista" onPress={() => this.service.clearUserList()} />
          </View>
          <FlatList
            data={this.state.userList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={this.renderUserItem}
          />
          <View style={styles.buttonContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nome do Usuario"
              value={this.state.userName}
              onChangeText={(text) => this.setState({ userName: text })}
            />
            <Button title="Adicionar" onPress={() => this.service.addUser(this.state.userName)} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      width: '80%',
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    userItem: {
      backgroundColor: '#e0e0e0',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 4,
      borderRadius: 5,
    },
    userName: {
      fontSize: 16,
    },
    input: {
      flex: 1,
      height: 40,
      marginRight: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 8,
    },
  });

export default UserView;
