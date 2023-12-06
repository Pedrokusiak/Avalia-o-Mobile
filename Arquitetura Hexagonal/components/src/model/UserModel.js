import axios from 'axios';

class UserModel {
  async getUserList() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      return response.data;
    } catch (error) {
      console.error('Erro ao obter a lista de usuarios:', error);
      return [];
    }
  }
}

export default UserModel;
