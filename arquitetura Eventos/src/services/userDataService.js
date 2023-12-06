import axios from 'axios';

class UserDataService {
  async getUserList() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      return response.data;
    } catch (error) {
      console.error('Error fetching user list:', error);
      return [];
    }
  }
}

export default UserDataService;
