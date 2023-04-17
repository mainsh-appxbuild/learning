import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useSelector} from 'react-redux';

const HomeScreen = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };

  const username = useSelector((store) => store.login.username);

  return (
    <View style={styles.mainView}>
      <Text style={styles.mainText}>
        Welcome <Text style={styles.loginText}> {username} </Text>
      </Text>
      <Button onPress={handleLogin} title={'Go to Home Screen'} />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#feda92',
  },
  loginText: {
    color: '#8d0ada',
    fontFamily: 'fantasy',
  },
  mainText: {
    fontSize: 30,
    paddingBottom: 30,
  },
});
