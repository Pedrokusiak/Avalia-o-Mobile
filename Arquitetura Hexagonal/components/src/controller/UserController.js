class UserController {
  constructor(view, model) {
    this.view = view;
    this.model = model;

    // Bind methods to the instance
    this.loadUserListFromAPI = this.loadUserListFromAPI.bind(this);
    this.clearUserList = this.clearUserList.bind(this);
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  async loadUserListFromAPI() {
    const users = await this.model.getUserList();
    this.view.setState({ userList: users });
  }

  clearUserList() {
    this.view.setState({ userList: [] });
  }

  addUser() {
    const { userName } = this.view.state;
    if (userName) {
      const newUser = { id: Date.now(), name: userName };
      const updatedList = [...this.view.state.userList, newUser];
      this.view.setState({ userList: updatedList, userName: '' });
    }
  }

  deleteUser(userId) {
    const updatedList = this.view.state.userList.filter((user) => user.id !== userId);
    this.view.setState({ userList: updatedList });
  }
}

export default UserController;
