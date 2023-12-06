import UserDataService from "./userDataService";

class UserViewService {
  constructor(view) {
    this.view = view;
    this.userDataService = new UserDataService();
  }

  async loadUserListFromAPI() {
    const user = await this.userDataService.getUserList();
    this.view.setState({ userList: user });
  }

  clearUserList() {
    this.view.setState({ userList: [] });
  }

  addUser(userName) {
    if (userName) {
      const newUser = { id: Date.now(), name: userName };
      const updatedList = [...this.view.state.userList, newUser];
      this.view.setState({ userList: updatedList });
    }
  }

  deleteUser(userId) {
    const updatedList = this.view.state.userList.filter((user) => user.id !== userId);
    this.view.setState({ userList: updatedList });
  }
}

export default UserViewService;
