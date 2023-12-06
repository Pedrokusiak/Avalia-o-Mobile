import UserModel from '../model/UserModel';

class UserApplicationService {
  constructor() {
    this.model = new UserModel();
  }

  async getUserList() {
    return this.model.getUserList();
  }
}

export default UserApplicationService;
