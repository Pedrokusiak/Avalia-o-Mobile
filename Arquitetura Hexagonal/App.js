// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import UserView from './components/src/pages/UserView';
import UserApplicationService from './components/src/service/UserService';

const App = () => {
  const userApplicationService = new UserApplicationService();

  return (
    <SafeAreaView style={styles.container}>
      <UserView model={userApplicationService} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
